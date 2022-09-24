import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateteamdialogueComponent } from './createteamdialogue/createteamdialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parody';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(CreateteamdialogueComponent);
  }
}

