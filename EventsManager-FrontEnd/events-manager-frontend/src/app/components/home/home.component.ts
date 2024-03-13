import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../event.service';
import { EventModel } from '../../event.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  eventService = inject(EventService); 
  events: EventModel[] = []; 


  ngOnInit() {

    this.eventService.getEvents().subscribe((result) => {
      this.events = result;
    });
  }



  displayedColumns: string[] = ['EventId', 'EventName', 'EventDate', 'Location', 'Cost', 'Language', 'Actions'];


  editClicked(eventId: number) {
    console.log(eventId, "Edit Event");
    this.router.navigateByUrl("/edit/" + eventId);
  }


  detailsClicked(eventId: number) {
    console.log(eventId, "View Event Details");
    this.router.navigateByUrl("/details/" + eventId);
  }


  deleteClicked(eventId: number) {
    console.log(eventId, "Delete Event");
    this.router.navigateByUrl("/delete/" + eventId);
  }
  constructor(private router: Router) { }

}
