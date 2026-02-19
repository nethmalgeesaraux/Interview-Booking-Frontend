import { Component, signal } from '@angular/core';
import { Navbar } from "./core/navbar/navbar";
import { Hero } from "./core/hero/hero";
import { Footer } from "./core/footer/footer";
import { Calendar } from "./features/calendar/calendar";
import { BookingModal } from './features/booking-modal/booking-modal';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Footer, Calendar, BookingModal],
  styleUrl: './app.css',
  template: `
    <div id="home">
      <app-navbar></app-navbar>
    </div>
    <app-hero></app-hero>
    <section class="booking-area" id="calendar">
      <div class="container">
        <div class="row g-4 align-items-start">
          <div class="col-lg-8">
            <app-calendar></app-calendar>
          </div>
          <div class="col-lg-4">
            <app-booking-modal></app-booking-modal>
          </div>
        </div>
      </div>
    </section>
    <div id="about">
      <app-footer></app-footer>
    </div>
  `
})
export class App {
  protected readonly title = signal('interview-booking-frontend');
}
