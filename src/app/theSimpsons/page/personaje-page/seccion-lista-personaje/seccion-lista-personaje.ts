import {Component, input} from '@angular/core';
import {TarjetasPeronajesShared} from '../../../shared/tarjetas-peronajes-shared/tarjetas-peronajes-shared';
import {PersonajeListType} from '../../../type/PersonajeType';

@Component({
  selector: 'app-seccion-lista-personaje',
  imports: [
    TarjetasPeronajesShared
  ],
  templateUrl: './seccion-lista-personaje.html',
})
export class SeccionListaPersonaje {

  personajesPaginados = input.required<PersonajeListType>();

}
