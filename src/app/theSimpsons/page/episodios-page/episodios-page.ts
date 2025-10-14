import {Component, inject, signal} from '@angular/core';
import {HeaderEpisodios} from './header-episodios/header-episodios';
import {SeccionListaEpisodios} from './seccion-lista-episodios/seccion-lista-episodios';
import {EpisodiosService} from '../../service/episodios-service';
import type {EpisodiosListType} from '../../type/EpisodiosType';

@Component({
  selector: 'app-episodios-page',
  imports: [
    HeaderEpisodios,
    SeccionListaEpisodios
  ],
  templateUrl: './episodios-page.html',
})
export default class EpisodiosPage {
  episodiosService = inject(EpisodiosService);

  episodioListType = signal<EpisodiosListType>({
    next:    '',
    pages:   0,
    count:   0,
    results:[]
  });

  obtenerEpisodios(page: number) {
    this.episodiosService.listarEpisodios(page).subscribe(data => {
      this.episodioListType.set(data);
    });
  }

  constructor() {
    this.obtenerEpisodios(0);
  }
}
