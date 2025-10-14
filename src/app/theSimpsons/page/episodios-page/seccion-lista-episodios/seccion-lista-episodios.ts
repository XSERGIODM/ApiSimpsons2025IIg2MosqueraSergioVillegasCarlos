import {Component, input} from '@angular/core';
import type {EpisodiosListType} from '../../../type/EpisodiosType';
import {TarjetaEpisodiosShared} from '../../../shared/tarjeta-episodios-shared/tarjeta-episodios-shared';

@Component({
  selector: 'app-seccion-lista-episodios',
  imports: [
    TarjetaEpisodiosShared
  ],
  templateUrl: './seccion-lista-episodios.html',
  styleUrl: './seccion-lista-episodios.css'
})
export class SeccionListaEpisodios {
  episodioListaPaginados = input.required<EpisodiosListType>();
}
