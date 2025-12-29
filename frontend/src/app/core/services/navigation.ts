import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

}
