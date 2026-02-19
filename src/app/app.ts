import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/navbar/navbar";
import { Hero } from "./core/hero/hero";
import { Footer } from "./core/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('interview-booking-frontend');
}
