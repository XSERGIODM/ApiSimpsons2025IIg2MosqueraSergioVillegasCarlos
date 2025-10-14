import {Component} from '@angular/core';
import {RutasType, RutaType} from '../../../type/RutaType';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-seccion-explorar-home',
  imports: [
    RouterLink
  ],
  templateUrl: './seccion-explorar-home.html',
  styleUrl: './seccion-explorar-home.css'
})
export class SeccionExplorarHome {

  rutas:RutaType[] = RutasType.filter(ruta => ['/personaje', '/lugares', '/episodios'].includes(ruta.path));

}
