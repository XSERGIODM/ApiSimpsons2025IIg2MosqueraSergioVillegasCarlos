import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {EpisodiosListType} from '../type/EpisodiosType';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {
  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/episodes';
  cargando = signal<boolean>(true);

  listarEpisodios(page: number): Observable<EpisodiosListType>{
    this.cargando.set(true);
    return this.http.get<EpisodiosListType>(this.apiUrl+this.enpoint+'?page='+page).pipe(
      map(data => {
        this.cargando.set(false);
        return data;
      })
    )
  }
}
