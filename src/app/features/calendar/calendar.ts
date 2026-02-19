import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../core/services/booking';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar implements OnInit {

  bookings: any[] = [];
  selectedDate: string = '';
  selectedStatus: string = '';

  constructor(private bookingService: Booking) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAll().subscribe(res => {
      this.bookings = res;
    });
  }

  getStatusClass(status: string) {
    switch(status) {
      case 'BOOKED': return 'status-pill is-booked';
      case 'AVAILABLE': return 'status-pill is-available';
      case 'CANCELLED': return 'status-pill is-cancelled';
      default: return 'status-pill';
    }
  }

  filteredBookings() {
    return this.bookings.filter(b => {
      return (!this.selectedDate || b.startTime.startsWith(this.selectedDate))
        && (!this.selectedStatus || b.status === this.selectedStatus);
    });
  }
}
