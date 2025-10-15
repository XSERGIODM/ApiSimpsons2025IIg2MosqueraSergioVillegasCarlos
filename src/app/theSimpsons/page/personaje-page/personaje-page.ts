import {Component, computed, inject, signal} from '@angular/core';
import {HeaderPersonaje} from './header-personaje/header-personaje';
import {SeccionListaPersonaje} from './seccion-lista-personaje/seccion-lista-personaje';
import {PersonajeService} from '../../service/personaje-service';
import {PersonajeListType, PersonajeType} from '../../type/PersonajeType';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';
import {PaginacionShared} from '../../shared/paginacion-shared/paginacion-shared';
import {BuscarShared} from '../../shared/buscar-shared/buscar-shared';


@Component({
  selector: 'app-personaje-page',
  imports: [
    HeaderPersonaje,
    SeccionListaPersonaje,
    LoaderShared,
    PaginacionShared,
    BuscarShared,
  ],
  templateUrl: './personaje-page.html',
})
export default class PersonajePage {

  personajeService = inject(PersonajeService);

  // Datos originales de la API (se cargan bajo demanda)
  personajesOriginales = signal<PersonajeType[]>([]);
  totalPersonajesAPI = signal<number>(0);
  totalPaginasAPI = signal<number>(0);
  todosLosDatosCargados = signal<boolean>(false);

  // Datos de la página actual (sin búsqueda)
  paginaActualAPI = signal<PersonajeListType>({
    next: '',
    pages: 0,
    count: 0,
    results: []
  });

  // Término de búsqueda
  terminoBusqueda = signal<string>('');

  // Página actual
  paginaActual = signal<number>(1);

  // Tamaño de página
  tamanioPagina = 10;

  // Modo de búsqueda activo
  modoBusquedaActivo = computed(() => this.terminoBusqueda().trim() !== '');

  // Personajes filtrados por búsqueda
  personajesFiltrados = computed(() => {
    const termino = this.terminoBusqueda().toLowerCase().trim();

    if (!termino) {
      return [];
    }

    return this.personajesOriginales().filter(personaje =>
      personaje.name.toLowerCase().includes(termino) ||
      personaje.occupation?.toLowerCase().includes(termino)
    );
  });

  // Personajes paginados (para mostrar en la página actual)
  personajesPaginados = computed(() => {
    if (!this.modoBusquedaActivo()) {
      return this.paginaActualAPI().results;
    }

    const filtrados = this.personajesFiltrados();
    const inicio = (this.paginaActual() - 1) * this.tamanioPagina;
    const fin = inicio + this.tamanioPagina;

    return filtrados.slice(inicio, fin);
  });

  // Total de páginas calculado
  totalPaginas = computed(() => {
    if (!this.modoBusquedaActivo()) {
      return this.paginaActualAPI().pages;
    }
    return Math.ceil(this.personajesFiltrados().length / this.tamanioPagina);
  });

  // Total de elementos
  totalElementos = computed(() => {
    if (!this.modoBusquedaActivo()) {
      return this.paginaActualAPI().count;
    }
    return this.personajesFiltrados().length;
  });

  // Objeto compatible con tu componente de lista
  personajeListType = computed<PersonajeListType>(() => ({
    next: '',
    pages: this.totalPaginas(),
    count: this.totalElementos(),
    results: this.personajesPaginados()
  }));

  obtenerPersonajes(page: number) {
    this.personajeService.listarpersonajes(page).subscribe(data => {
      this.paginaActualAPI.set(data);

      // Guardar info del total solo la primera vez
      if (page === 1) {
        this.totalPersonajesAPI.set(data.count);
        this.totalPaginasAPI.set(data.pages);
      }
    });
  }

  // Cargar todos los personajes SOLO cuando se busca por primera vez
  cargarTodosLosPersonajesParaBusqueda() {
    if (this.todosLosDatosCargados()) {
      return; // Ya están cargados
    }

    const todosLosPersonajes: PersonajeType[] = [];
    const totalPaginas = this.totalPaginasAPI();
    let paginasCargadas = 0;

    for (let i = 0; i < totalPaginas; i++) {
      this.personajeService.listarpersonajes(i).subscribe(data => {
        todosLosPersonajes.push(...data.results);
        paginasCargadas++;

        if (paginasCargadas === totalPaginas) {
          this.personajesOriginales.set(todosLosPersonajes);
          this.todosLosDatosCargados.set(true);
        }
      });
    }
  }

  // Método llamado cuando el usuario cambia de página
  cambiarPagina(nuevaPagina: number) {
    this.paginaActual.set(nuevaPagina);

    // Si NO está en modo búsqueda, hacer petición a la API
    if (!this.modoBusquedaActivo()) {
      this.obtenerPersonajes(nuevaPagina);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Método llamado cuando el usuario busca
  realizarBusqueda(termino: string) {
    this.terminoBusqueda.set(termino);
    this.paginaActual.set(1);

    // Si hay término de búsqueda y no están cargados todos los datos
    if (termino.trim() !== '' && !this.todosLosDatosCargados()) {
      this.cargarTodosLosPersonajesParaBusqueda();
    }
  }

  constructor() {
    this.obtenerPersonajes(1); // Primera página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
