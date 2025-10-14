import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./theSimpsons/page/home-page/home-page')
  },
  {
    path: 'personaje',
    loadComponent: () => import('./theSimpsons/page/personaje-page/personaje-page'),
  },
  {
    path: 'lugares',
    loadComponent: () => import('./theSimpsons/page/lugares-page/lugares-page')
  },
  {
    path: 'episodios',
    loadComponent: () => import('./theSimpsons/page/episodios-page/episodios-page')
  },
  {
    path: 'detalle-personaje/:id',
    loadComponent: () => import('./theSimpsons/page/destalle-personaje-page/destalle-personaje-page')
  },
  {
    path: 'about',
    loadComponent: () => import('./theSimpsons/page/about-page/about-page')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

