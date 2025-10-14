import {Component, input} from '@angular/core';
import {TarjetaLugaresShared} from '../../../shared/tarjeta-lugares-shared/tarjeta-lugares-shared';
import {LugarListType} from '../../../type/LugarType';

@Component({
  selector: 'app-seccion-lista-lugares',
  imports: [
    TarjetaLugaresShared
  ],
  templateUrl: './seccion-lista-lugares.html',
  styleUrl: './seccion-lista-lugares.css'
})
export class SeccionListaLugares {

  listaLugaresPaginado = input.required<LugarListType>();

}
