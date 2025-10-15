import {Component, input, numberAttribute, output} from '@angular/core';

@Component({
  selector: 'app-paginacion-shared',
  imports: [],
  templateUrl: './paginacion-shared.html',
  styleUrl: './paginacion-shared.css'
})
export class PaginacionShared {

  paginaActual = input.required<number>();
  totalPaginas = input.required<number>();
  totalElementos = input.required<number>();

  paginaCambiada = output<number>();

  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas()) {
      this.paginaCambiada.emit(nuevaPagina);
    }
  }

  obtenerPaginas(): (number | string)[] {
    const actual = this.paginaActual();
    const total = this.totalPaginas();
    const paginas: (number | string)[] = [];

    if (total <= 7) {
      // Mostrar todas las páginas si son 7 o menos
      for (let i = 1; i <= total; i++) {
        paginas.push(i);
      }
    } else {
      // Siempre mostrar primera página
      paginas.push(1);

      if (actual > 3) {
        paginas.push('...');
      }

      // Mostrar páginas alrededor de la actual
      const inicio = Math.max(2, actual - 1);
      const fin = Math.min(total - 1, actual + 1);

      for (let i = inicio; i <= fin; i++) {
        paginas.push(i);
      }

      if (actual < total - 2) {
        paginas.push('...');
      }

      // Siempre mostrar última página
      paginas.push(total);
    }

    return paginas;
  }

  protected readonly numberAttribute = numberAttribute;
}
