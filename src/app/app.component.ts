import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hola Mundo Angular!';
  users: string[] = ['Antonio', 'Alberto', 'David'];
  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log(this.visible)
  }
}
