import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  badge: string;
  badgeType: 'red' | 'amber' | 'teal' | 'purple' | 'blue';
  icon: string;
  highlight?: boolean;
}

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

  stats = [
    { value: '13.5K', label: 'suscriptores' },
    { value: '88K',   label: 'mejor video' },
    { value: '<18 meses', label: 'de recorrido' },
  ];

  timeline: TimelineItem[] = [
    {
      date: 'Noviembre 2024',
      title: 'Nace el canal',
      description: 'Primer video publicado. El inicio de una comunidad de Linux en español.',
      badge: 'Inicio',
      badgeType: 'red',
      icon: 'play_circle',
    },
    {
      date: '2024 — 2025',
      title: 'Video estrella: 88,000 vistas',
      description: 'El video más visto del canal. Definió la identidad y atrajo a la mayor parte de la comunidad.',
      badge: '88K vistas',
      badgeType: 'amber',
      icon: 'star',
      highlight: true,
    },
    {
      date: '2025',
      title: '1,000 suscriptores',
      description: 'Primer hito oficial. El canal empieza a tener comunidad real y constante.',
      badge: 'Hito',
      badgeType: 'teal',
      icon: 'group',
    },
    {
      date: '2025',
      title: '10,000 suscriptores',
      description: 'Silver Play Button en camino. Crecimiento constante en contenido de Linux.',
      badge: '10K',
      badgeType: 'purple',
      icon: 'emoji_events',
    },
    {
      date: 'Abril 2026',
      title: '13,500 suscriptores — hoy',
      description: 'La comunidad sigue creciendo. Menos de 18 meses para llegar aquí desde cero.',
      badge: 'Presente',
      badgeType: 'blue',
      icon: 'flag',
      highlight: true,
    },
  ];

  goToVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
}