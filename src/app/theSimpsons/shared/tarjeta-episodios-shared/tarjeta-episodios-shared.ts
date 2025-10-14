import {Component, input, signal} from '@angular/core';
import type {EpisodiosType} from '../../type/EpisodiosType';
import {environment} from '../../../../environments/environment';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-tarjeta-episodios-shared',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './tarjeta-episodios-shared.html',
  styleUrl: './tarjeta-episodios-shared.css'
})
export class TarjetaEpisodiosShared {
  episodio = input.required<EpisodiosType>()
  urlImagenBase = signal<string>(environment.apiImagenUrl)

  obtenerImagen(size:number, path:string): String{
    return this.urlImagenBase()+'/'+size +path;
  }
}
