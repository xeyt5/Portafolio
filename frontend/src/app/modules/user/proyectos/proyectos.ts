import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProjectDialog } from '../project-dialog/project-dialog';


@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})

export class Proyectos {
  constructor(public dialog: MatDialog) { }


  projects = [
    {
      title: 'Nombre 1',
      description: 'Descripción del proyecto 1',
      link: 'https://example.com/proyecto1',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']

    },
    {
      title: 'Nombre 2',
      description: 'Descripción del proyecto 2',
      link: 'https://example.com/proyecto2',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']
    },
    {
      title: 'Nombre 3',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']
    },
    {
      title: 'Nombre 4',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']
    },
    {
      title: 'Nombre 5',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']
    },
    {
      title: 'Nombre 6',
      description: 'Descripción del proyecto 3',
      link: 'https://example.com/proyecto3',
      img: 'cargando.avif',
      images: ['cargando.avif', 'cargando.avif', 'cargando.avif']
    }
  ]

  openDialog(project: any) {
    this.dialog.open(ProjectDialog, {
      data: project
    });
  }

}
