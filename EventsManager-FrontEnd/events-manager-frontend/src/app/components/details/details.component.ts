import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from '../../event.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  eventService: EventService;
  activatedRoute: ActivatedRoute;
  eventDetails: EventModel = {
    eventID: 0,
    eventName: "",
    eventDate: new Date(),
    location: "",
    cost: 0,
    language: ""
  };

  constructor(eventService: EventService, activatedRoute: ActivatedRoute) {
    this.eventService = eventService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.eventService.getEventById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.eventDetails = result;
    });
  }
}
