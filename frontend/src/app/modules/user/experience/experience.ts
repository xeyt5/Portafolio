import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  experiences = [
    {
      title: 'Desarrollador Frontend',
      company: 'Ejemplo S.A.',
      duration: 'Enero 2020 - Presente',
      description: 'Desarrollo de interfaces de usuario utilizando Angular y TypeScript.'
    },
    {
      title: 'Desarrollador Web',
      company: 'Otra Empresa S.L.',
      duration: 'Junio 2018 - Diciembre 2019',
      description: 'Creación de sitios web responsivos y optimizados para SEO.'
    },
    {
      title: 'Creador de contenido',
      company: 'Agencia de Marketing',
      duration: 'Marzo 2017 - Mayo 2018',
      description: 'Creación y edición de contenido para redes sociales y campañas publicitarias.'
    },
    {
      title: 'Freelance',
      company: 'Autónomo',
      duration: 'Enero 2016 - Febrero 2017',
      description: 'Desarrollo de proyectos web personalizados para clientes diversos.'
    },
    {
      title: 'Practicante de Desarrollo',
      company: 'Startup Innovadora',
      duration: 'Julio 2015 - Diciembre 2015',
      description: 'Asistencia en el desarrollo de aplicaciones web y pruebas de usabilidad.'
    }
  ]

}
