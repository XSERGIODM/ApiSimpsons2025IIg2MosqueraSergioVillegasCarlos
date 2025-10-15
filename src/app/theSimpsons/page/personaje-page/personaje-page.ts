import {Component, computed, inject, signal} from '@angular/core';
import {HeaderPersonaje} from './header-personaje/header-personaje';
import {SeccionListaPersonaje} from './seccion-lista-personaje/seccion-lista-personaje';
import {PersonajeService} from '../../service/personaje-service';
import {PersonajeListType} from '../../type/PersonajeType';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';
import {PaginacionShared} from '../../shared/paginacion-shared/paginacion-shared';

@Component({
  selector: 'app-personaje-page',
  imports: [
    HeaderPersonaje,
    SeccionListaPersonaje,
    LoaderShared,
    PaginacionShared
  ],
  templateUrl: './personaje-page.html',
})
export default class PersonajePage {

  personajeService = inject(PersonajeService);

  personajeListType = signal<PersonajeListType>({
    next:    '',
    pages:   0,
    count:   0,
    results:[]
  });

  // Signal para la página actual (empieza en 1 para la UI)
  paginaActual = signal<number>(1);

  obtenerPersonajes(page: number) {
    this.personajeService.listarpersonajes(page).subscribe(data => {
      this.personajeListType.set(data);
      // Scroll suave al inicio cuando cambia la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Método llamado cuando el usuario cambia de página
  cambiarPagina(nuevaPagina: number) {
    this.paginaActual.set(nuevaPagina);
    // Si tu API usa páginas desde 0, resta 1
    // Si tu API usa páginas desde 1, usa nuevaPagina directamente
    this.obtenerPersonajes(nuevaPagina);
  }

  constructor() {
    this.obtenerPersonajes(0); // Primera página (índice 0)
  }
}
