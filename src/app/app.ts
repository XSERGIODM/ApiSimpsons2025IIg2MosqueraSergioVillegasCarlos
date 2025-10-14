import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarShared} from './theSimpsons/shared/navbar-shared/navbar-shared';
import {FooterShared} from './theSimpsons/shared/footer-shared/footer-shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarShared, FooterShared],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ApiSimpsons2025IIg2MosqueraSergioVillegasCarlos');
}
