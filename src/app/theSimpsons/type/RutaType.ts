export interface RutaType {
  path: string;
  titulo: string;
  icono: string;
  descripcion: string;
}

export const RutasType: RutaType[] = [
  {
    path: 'home',
    titulo: 'Home',
    icono: 'home',
    descripcion:''
  },
  {
    path: '/personaje',
    titulo: 'Personaje',
    icono: '🍺',
    descripcion: 'De Homero a Lisa, descubre a todos los habitantes de Springfield.'
  },
  {
    path: '/lugares',
    titulo: 'Lugares',
    icono: '🏠',
    descripcion:'El Bar de Moe, la Planta Nuclear, la Escuela Primaria y más.'
  },
  {
    path: '/episodios',
    titulo: 'Episodios',
    icono: '📺',
    descripcion:'Revive capítulos clásicos y encuentra nuevas joyas.'
  },
  {
    path: '/about',
    titulo: 'About',
    icono: 'about',
    descripcion: ''
  }
]
