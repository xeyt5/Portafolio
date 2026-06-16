import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard/dashboard.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})
export class DashboardAdmin implements OnInit {
  private _dashboardService = inject(DashboardService);
  private _cdr = inject(ChangeDetectorRef);
  dashboard: any = null;
  loading: boolean = true;
  
  ngOnInit(): void {
      this._dashboardService.getDashboardData().subscribe({
      next: res => {
        console.log('Response completo:', res);           
        console.log('data.dashboard:', res.data?.dashboard);
        this.dashboard = res.data.dashboard;
        this.loading = false;
        this._cdr.detectChanges(); 
      },
      error: err => {
        console.error('Error fetching dashboard data', err);
        this.loading = false;
        this._cdr.detectChanges(); 
      }
    });
  }
}
