import {Component, input, signal} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {LugarType} from '../../type/LugarType';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-tarjeta-lugares-shared',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './tarjeta-lugares-shared.html',
  styleUrl: './tarjeta-lugares-shared.css'
})
export class TarjetaLugaresShared {

  lugar = input.required<LugarType>();

  urlImagenBase = signal<string>(environment.apiImagenUrl)

  obtenerImagen(size:number, path:string): String{
    return this.urlImagenBase()+'/'+size +path;
  }
  /*truncarFrase(frase: string): string {
    if (!frase) return 'No disponible';
    const maxLength = 20; // Ajusta según el espacio disponible
    return frase.length > maxLength ? frase.substring(0, maxLength) + '...' : frase;
  }*/
}
