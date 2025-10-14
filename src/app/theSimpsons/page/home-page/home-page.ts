import { Component } from '@angular/core';
import {FooterShared} from '../../shared/footer-shared/footer-shared';
import {NavbarShared} from '../../shared/navbar-shared/navbar-shared';
import {HeaderHome} from './header-home/header-home';
import {SeccionExplorarHome} from './seccion-explorar-home/seccion-explorar-home';
import {SeccionFamiliaHome} from './seccion-familia-home/seccion-familia-home';
import {SeccionFracesCelebresHome} from './seccion-fraces-celebres-home/seccion-fraces-celebres-home';
import {SeccionInformacionGeneralHome} from './seccion-informacion-general-home/seccion-informacion-general-home';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderHome,
    SeccionExplorarHome,
    SeccionFamiliaHome,
    SeccionFracesCelebresHome,
    SeccionInformacionGeneralHome
  ],
  templateUrl: './home-page.html',
})
export default class HomePage {

}
