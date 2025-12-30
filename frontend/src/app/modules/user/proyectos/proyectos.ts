import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {


  projects = [
    {
      title: 'Nombre 1',
      description: 'Descripción del proyecto 1',
      link: 'https://example.com/proyecto1'
    },
    {
      title: 'Nombre 2',
      description: 'Descripción del proyecto 2',
      link: 'https://example.com/proyecto2'
    },
    {
      title: 'Nombre 3',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3'
    }
  ]

}
