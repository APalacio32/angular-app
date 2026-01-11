import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent],
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
