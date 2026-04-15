import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  some: string;
  protected readonly title = signal('simbirsoft-soccerstat');
  constructor(){this.some="wasdadas"}
}
