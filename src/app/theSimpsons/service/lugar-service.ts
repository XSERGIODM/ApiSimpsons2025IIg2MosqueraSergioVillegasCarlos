import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LugarListType, LugarType} from '../type/LugarType';

@Injectable({
  providedIn: 'root'
})
export class LugarService {


  apiUrl= environment.apiUrl;
  http= inject(HttpClient);
  enpoint = '/locations';

  listarlugares(page: number): Observable<LugarListType>{
    return this.http.get<LugarListType>(this.apiUrl+this.enpoint+'?page='+page);
  }
}
