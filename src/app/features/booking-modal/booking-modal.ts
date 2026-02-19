import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../core/services/booking';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css'
})
export class BookingModal {

  @Output() refresh = new EventEmitter();
  formData: any = {};

  constructor(
    private bookingService: Booking,
    private toastr : ToastrService
  ) {}

  submit() {
    if(!this.formData.candidateId || !this.formData.interviewerId || !this.formData.startTime){
      this.toastr.warning('All fields are required');
      return;
    }

    this.bookingService.create(this.formData).subscribe({
      next: () => {
        this.toastr.success('Booking Created Successfully');
        this.refresh.emit();
      },
      error: (err) => {
        this.toastr.error(err.error.message || 'Booking Failed');
      }
    });
  }
}
