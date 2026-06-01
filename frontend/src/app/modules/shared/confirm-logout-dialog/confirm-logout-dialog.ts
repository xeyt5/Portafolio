import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-logout-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './confirm-logout-dialog.html',
  styleUrl: './confirm-logout-dialog.css'
})
export class ConfirmLogoutDialog {
  constructor(private dialogRef: MatDialogRef<ConfirmLogoutDialog>) {}
  confirmar(): void{
    this.dialogRef.close(true);
  }
  cancelar(): void{
    this.dialogRef.close(false);
  }
}
