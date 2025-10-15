import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HeaderLugares} from './header-lugares/header-lugares';
import {SeccionListaLugares} from './seccion-lista-lugares/seccion-lista-lugares';
import {LugarListType} from '../../type/LugarType';
import {LugarService} from '../../service/lugar-service';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';
import {PaginacionShared} from '../../shared/paginacion-shared/paginacion-shared';


@Component({
  selector: 'app-lugares-page',
  imports: [
    HeaderLugares,
    SeccionListaLugares,
    LoaderShared,
    PaginacionShared
  ],
  templateUrl: './lugares-page.html',
  styleUrl: './lugares-page.css'
})
export default class LugaresPage {

  lugarService = inject(LugarService);

  lugares = signal<LugarListType>(
    {
      next: '',
      pages: 0,
      count: 0,
      results: []
    }
  );

  obtenerLugares(page: number) {
    this.lugarService.listarlugares(page).subscribe(
      data => {
        this.lugares.set(data);
      }
    )
  }

  paginaActual = signal<number>(1);

  cambiarPagina(nuevaPagina: number) {
    this.paginaActual.set(nuevaPagina);

    this.obtenerLugares(nuevaPagina);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() {
    this.obtenerLugares(1);
  }

}
