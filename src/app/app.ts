import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tst } from "./tst/tst";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tst],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
