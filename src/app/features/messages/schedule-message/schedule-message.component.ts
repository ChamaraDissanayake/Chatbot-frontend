import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../../../core/services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-message',
  templateUrl: './schedule-message.component.html',
  styleUrls: ['./schedule-message.component.scss'],
  standalone: false
})
export class ScheduleMessageComponent implements OnInit {
  scheduleForm: FormGroup;
  phoneNumber: string | null = null;

  constructor(
    private fb: FormBuilder,
    private scheduleService: ScheduleService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.scheduleForm = this.fb.group({
      to: ['', Validators.required],
      body: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    if (this.phoneNumber) {
      this.scheduleForm.patchValue({ to: this.phoneNumber });
    }
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      const schedule = this.scheduleForm.value;

      const formattedDate = new Date(schedule.date);
      console.log('schedule date', formattedDate);

      // Update the schedule object with the formatted date
      schedule.date = formattedDate;

      // Call the scheduleService
      this.scheduleService.scheduleMessage(schedule).subscribe(
        (response) => {
          console.log('schedule message response', response);

          // Handle the response based on its structure
          if (response && response.jobId) { // Adjust this condition based on your API response
            alert('Message scheduled successfully!');
            this.router.navigate(['/messages/scheduled-messages']);
          } else {
            alert('Failed to schedule message. Please try again.');
          }
        },
        (error) => {
          console.error('Error scheduling message:', error);
          alert('An error occurred while scheduling the message.');
        }
      );
    }
  }
}
