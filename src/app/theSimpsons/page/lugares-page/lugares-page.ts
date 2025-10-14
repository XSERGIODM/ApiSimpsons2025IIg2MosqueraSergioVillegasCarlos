import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HeaderLugares} from './header-lugares/header-lugares';
import {SeccionListaLugares} from './seccion-lista-lugares/seccion-lista-lugares';
import {LugarListType} from '../../type/LugarType';
import {LugarService} from '../../service/lugar-service';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';

@Component({
  selector: 'app-lugares-page',
  imports: [
    HeaderLugares,
    SeccionListaLugares,
    LoaderShared
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

  obtenerLugares(page:number) {
    this.lugarService.listarlugares(page).subscribe(
      data => {
        this.lugares.set(data);
      }
    )
  }

  constructor() {
    this.obtenerLugares(0);
  }

}
