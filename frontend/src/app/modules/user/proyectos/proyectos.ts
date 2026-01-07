import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {


  projects = [
    {
      title: 'Nombre 1',
      description: 'Descripción del proyecto 1',
      link: 'https://example.com/proyecto1',
      img: 'cargando.avif'

    },
    {
      title: 'Nombre 2',
      description: 'Descripción del proyecto 2',
      link: 'https://example.com/proyecto2',
      img: 'cargando.avif'
    },
    {
      title: 'Nombre 3',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif'
    },
    {
      title: 'Nombre 4',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif'
    },
    {
      title: 'Nombre 5',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif'
    },
    {
      title: 'Nombre 6',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif'
    }
  ]

}
