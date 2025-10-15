import {Component, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-buscar-shared',
  imports: [
    FormsModule
  ],
  templateUrl: './buscar-shared.html',
  styleUrl: './buscar-shared.css'
})
export class BuscarShared {

  terminoBusqueda = signal<string>('');
  busquedaRealizada = output<string>();

  private timeoutId: any = null;

  programarBusqueda() {
    // Cancelar búsqueda anterior
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Programar nueva búsqueda después de 300ms (búsqueda instantánea en cliente)
    this.timeoutId = setTimeout(() => {
      this.busquedaRealizada.emit(this.terminoBusqueda().trim());
    }, 300);
  }

  limpiar() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.terminoBusqueda.set('');
    this.busquedaRealizada.emit('');
  }

}
