import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {EpisodiosListType} from '../type/EpisodiosType';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {
  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/episodes';

  listarEpisodios(page: number): Observable<EpisodiosListType>{
    return this.http.get<EpisodiosListType>(this.apiUrl+this.enpoint+'?page='+page);
  }
}
