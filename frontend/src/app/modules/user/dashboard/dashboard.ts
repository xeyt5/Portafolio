import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { RouterLink } from '@angular/router';
import { SafeUrlPipe } from '../../../pipes/safe-url-pipe';
import { title } from 'process';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeUrlPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  user={ 
    name:"xeyt",
    avatar: "https://i.pravatar.cc/150?img=2" 
  }
  videos = [
    {
      title: '¡Las 10 apps que no pueden faltar en tu Linux!',
      description: '¡Hola a todos! Bienvenidos a mi canal. Hoy les traigo un video súper interesante sobre 10 apps para linux!!!',
      url: 'https://www.youtube.com/embed/kEsILbeD13g'
    },
    {
      title: 'Lo que Windows NO te permite hacer (pero Linux sí)',
      description: 'Hola a todos! Bienvenidos a mi canal. Hoy les traigo un video súper interesante donde te muestro cosas que Windows no te permite hacer pero Linux sí!!!',
      url: 'https://www.youtube.com/embed/EaMvGe8Nqzs'
      
    },
    {
      title: '¡Mira cómo Hyperland cambia tu Linux!',
      description: '¡Hola a todos! Bienvenidos a mi canal. Hoy les traigo un video súper interesante sobre Hyperland, un gestor de ventanas para Linux que transformará tu experiencia visual!!!',
      url: 'https://www.youtube.com/embed/oC4aE2Qc5tE'
    }

  ];
  

}
