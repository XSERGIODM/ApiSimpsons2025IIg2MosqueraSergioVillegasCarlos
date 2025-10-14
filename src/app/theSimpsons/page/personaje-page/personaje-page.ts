import {Component, computed, inject, signal} from '@angular/core';
import {HeaderPersonaje} from './header-personaje/header-personaje';
import {SeccionListaPersonaje} from './seccion-lista-personaje/seccion-lista-personaje';
import {PersonajeService} from '../../service/personaje-service';
import {PersonajeListType} from '../../type/PersonajeType';
import {map} from 'rxjs';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';

@Component({
  selector: 'app-personaje-page',
  imports: [
    HeaderPersonaje,
    SeccionListaPersonaje,
    LoaderShared
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

  obtenerPersonajes(page: number) {
    this.personajeService.listarpersonajes(page).subscribe(data => {
      this.personajeListType.set(data);
    });
  }

  constructor() {
    this.obtenerPersonajes(0);
  }
}
