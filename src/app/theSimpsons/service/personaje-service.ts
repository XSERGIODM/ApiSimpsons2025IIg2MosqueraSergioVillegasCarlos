import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import type {PersonajeListType, PersonajeType} from '../type/PersonajeType';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {


  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/characters';



  listarpersonajes(page: number): Observable<PersonajeListType>{
    return this.http.get<PersonajeListType>(this.apiUrl+this.enpoint+'?page='+page);
  }

  obtenerPersonajePorId(id: number): Observable<PersonajeType>{
    return this.http.get<PersonajeType>(this.apiUrl+this.enpoint+'/'+id);
  }

}
