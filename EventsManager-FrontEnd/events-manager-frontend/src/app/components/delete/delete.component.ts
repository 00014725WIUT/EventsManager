import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  imports: [CommonModule]
})

export class DeleteComponent implements OnInit {
  eventService = inject(EventService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  eventId: number = 0;
  eventName: string = '';
  eventDate: Date = new Date();
  location: string = '';
  cost: number = 0;
  language: string = '';

  ngOnInit() {
    // Get the event ID from the route parameters
    this.eventId = this.activatedRoute.snapshot.params['id'];
  }

  deleteEvent() {
    // Call the event service to delete the event
    this.eventService.deleteEvent(this.eventId).subscribe(() => {
      alert('Event deleted successfully');
      // Navigate back to the events list or any other desired route
      this.router.navigateByUrl('/events');
    }, (error) => {
      console.error('Error deleting event', error);
      // Handle error as needed
    });
  }
}
