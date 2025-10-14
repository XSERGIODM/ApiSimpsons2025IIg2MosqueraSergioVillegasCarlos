import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LugarListType, LugarType} from '../type/LugarType';

@Injectable({
  providedIn: 'root'
})
export class LugarService {


  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/locations';
  cargando = signal<boolean>(true);

  listarlugares(page: number): Observable<LugarListType>{
    this.cargando.set(true);
    return this.http.get<LugarListType>(this.apiUrl+this.enpoint+'?page='+page).pipe(
      map(data => {
        this.cargando.set(false);
        return data;
      })
    )
  }
}
