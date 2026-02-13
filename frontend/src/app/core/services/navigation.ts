import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

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
  private navigationItems: NavigationItem[] = [
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
    }
  ];


  adminNavigationItems: NavigationItem[] = [
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
      id: 'sing_out',
      title: 'Sing Out',
      type: 'link',
      icon: 'logout',
      link: '/auth/logout'
    },
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


  get(): Observable<NavigationItem[]> {

    const isLoggedIn = !!localStorage.getItem('access_token');
    const isAdmin = location.pathname.includes('/admin');

    const navigationItems = isAdmin 
      ? this.adminNavigationItems 
      : this.navigationItems;

    const filteredItems = navigationItems.filter(item => {
      if (item.id === 'dashboard' && !isLoggedIn) {
        return false; 
      }
      return true;
    });

    return of(filteredItems);
  }


}
