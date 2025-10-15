import {Component, inject, input, OnInit, signal} from '@angular/core';
import {PersonajeType} from '../../type/PersonajeType';
import {environment} from '../../../../environments/environment';
import {NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {PersonajeService} from '../../service/personaje-service';
import {map} from 'rxjs';
import {LoaderShared} from '../../shared/loader-shared/loader-shared';

@Component({
  selector: 'app-destalle-personaje-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    LoaderShared
  ],
  templateUrl: './destalle-personaje-page.html',
  styleUrl: './destalle-personaje.css'
})
export default class DestallePersonajePage implements OnInit {

  personaje = signal<PersonajeType>({
    id: 0,
    name: '',
    occupation: '',
    age: 0,
    status: '',
    gender: '',
    birthdate: new Date(),
    portrait_path: '',
    phrases: []
  })

  urlImagenBase = signal<string>(environment.apiImagenUrl)

  personajeService = inject(PersonajeService);

  rutaActiva = toSignal(
    inject(ActivatedRoute)
      .params
      .pipe(
        map(
          (parametro) =>
            parametro['id']
        )
      )
  );

  ngOnInit(): void {
    this.personajeService.obtenerPersonajePorId(this.rutaActiva()).subscribe(data => {
      this.personaje.set(data);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  obtenerImagen(size:number, path:string): String{
    return this.urlImagenBase()+'/'+size +path;
  }

}
