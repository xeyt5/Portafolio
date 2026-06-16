import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-login-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './confirm-login-dialog.html',
  styleUrl: './confirm-login-dialog.css'
})
export class ConfirmLoginDialog {
  constructor(private dialogRef: MatDialogRef<ConfirmLoginDialog>) {}
  confirmar(): void{
    this.dialogRef.close(true);
  }
}
