import {Component} from '@angular/core';
import {RutasType, RutaType} from '../../type/RutaType';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar-shared',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar-shared.html',
  styleUrl: './navbar-shared.css'
})
export class NavbarShared {
  rutas:RutaType[]= RutasType;
}
