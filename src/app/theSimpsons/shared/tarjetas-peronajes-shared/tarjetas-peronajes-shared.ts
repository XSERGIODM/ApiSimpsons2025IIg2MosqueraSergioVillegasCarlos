import {Component, input, signal} from '@angular/core';
import {PersonajeType} from '../../type/PersonajeType';
import {environment} from '../../../../environments/environment';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-tarjetas-peronajes-shared',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './tarjetas-peronajes-shared.html',
  styleUrl: './tarjetas-peronajes-shared.css'
})
export class TarjetasPeronajesShared {
  personaje = input.required<PersonajeType>();

  urlImagenBase = signal<string>(environment.apiImagenUrl)

  obtenerImagen(size:number, path:string): String{
    return this.urlImagenBase()+'/'+size +path;
  }
}
