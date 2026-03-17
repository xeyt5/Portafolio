import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  imports: [],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.css'
})
export class ProjectDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProjectDialog>) { }

currentIndex = 0;

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.data.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.data.images.length) % this.data.images.length;
  }
  close() {
    this.dialogRef.close();
  }
    
}
