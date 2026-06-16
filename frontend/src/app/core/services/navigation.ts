import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'link' | 'group';
  icon?: string;
  link?: string;
  children?: NavigationItem[];
}


@Injectable({
  providedIn: 'root'
})

export class Navigation {
  //private PlatformId: Inject(PLATFORM_ID):
  private platformId = inject(PLATFORM_ID);
  navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'link',
      icon: 'dashboard',
      link: '/dashboard'
    },
    {
      id: 'proyectos',
      title: 'proyectos',
      type: 'link',
      icon: 'folder',
      link: '/proyectos'
    },
    {
      id: 'experience',
      title: 'Experience',
      type: 'link',
      icon: 'work',
      link: '/experience'
    },
    {
      id: 'social',
      title: 'Social',
      type: 'link',
      icon: 'share',
      link: '/social'
    }
  ];


  adminNavigationItems: NavigationItem[] = [
    {
      id: 'dashboard-admin',
      title: 'Dashboard admin',
      type: 'link',
      icon: 'dashboard',
      link: '/dashboard-admin'
    },
    {
      id: 'proyectos-admin',
      title: 'proyectos admin',
      type: 'link',
      icon: 'folder',
      link: '/projects-admin'
    },
    {
      id: 'experience_admin',
      title: 'Experience admin',
      type: 'link',
      icon: 'work',
      link: '/experience-admin'
    },
    {
      id: 'social-admin',
      title: 'Social-admin',
      type: 'link',
      icon: 'share',
      link: '/social-admin'
    }
    
  ];



  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }
  toggleNavigation(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
  
  getSidebarState(): boolean {
    return this.isOpenSubject.value;
  }

  get(): Observable<NavigationItem[]>{
    if (!isPlatformBrowser(this.platformId)) {
      return of(this.navigationItems);
    }
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      const user = JSON.parse(userStr);
      const isAdmin = user.is_staff || user.is_superuser || user.role === 'admin';
      
      return of(isAdmin ? this.adminNavigationItems : this.navigationItems);
    }
    
    return of(this.navigationItems);
  }

}
