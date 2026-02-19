import { Component, signal } from '@angular/core';
import { Navbar } from "./core/navbar/navbar";
import { Hero } from "./core/hero/hero";
import { Footer } from "./core/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Footer],
  styleUrl: './app.css',
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <div class="container" id="calendar">
      <!-- <app-calendar></app-calendar> -->
    </div>
    <app-footer></app-footer>
  `
})
export class App {
  protected readonly title = signal('interview-booking-frontend');
}
