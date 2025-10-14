import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import type {PersonajeListType, PersonajeType} from '../type/PersonajeType';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {


  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/characters';
  cargando = signal<boolean>(true);



  listarpersonajes(page: number): Observable<PersonajeListType>{
    this.cargando.set(true);
    return this.http.get<PersonajeListType>(this.apiUrl+this.enpoint+'?page='+page).pipe(
      map(data => {
        this.cargando.set(false);
        return data;
      })
    )
  }

  obtenerPersonajePorId(id: number): Observable<PersonajeType>{
    this.cargando.set(true);
    return this.http.get<PersonajeType>(this.apiUrl+this.enpoint+'/'+id).pipe(
      map(data => {
        this.cargando.set(false);
        return data;
      })
    )
  }

}
