import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.html',
  styleUrl: './social.css'
})
export class Social {

  videos = [
    {
      title: '¡Las 10 apps que no pueden faltar en tu Linux!',
      description: 'Video sobre apps para Linux',
      videoId: 'kEsILbeD13g'
    },
    {
      title: 'Lo que Windows NO te permite hacer',
      description: 'Comparativa Linux vs Windows',
      videoId: 'EaMvGe8Nqzs'
    },
    {
      title: '¡Mira cómo Hyprland cambia tu Linux!',
      description: 'Hyprland showcase',
      videoId: 'oC4aE2Qc5tE'
    }
  ];

  goToVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

}