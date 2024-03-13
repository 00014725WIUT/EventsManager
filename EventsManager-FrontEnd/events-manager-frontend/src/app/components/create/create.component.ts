import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';
import { Router } from '@angular/router';
import { EventModel } from '../../event.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone:true,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [FormsModule] 
})

export class CreateComponent implements OnInit {
  createEvent: EventModel = {
    eventID: 0,
    eventName: '',
    eventDate: new Date(),
    location: '',
    cost: 0,
    language: '',
  };

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {}

  create() {
    this.eventService.createEvent(this.createEvent).subscribe((result) => {
      alert('Event created successfully!');
      this.router.navigateByUrl('/events'); // Navigate to the events listing page
    });
  }
}

