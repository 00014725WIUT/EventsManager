import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../../event.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class UpdateComponent implements OnInit {
  eventService: EventService;
  activatedRoute: ActivatedRoute;
  router: Router;
  editEvent: EventModel = {
    eventID: 0, 
    eventName: "",
    eventDate: new Date(),
    location: "",
    cost: 0,
    language: ""
  };

  constructor(eventService: EventService, activatedRoute: ActivatedRoute, router: Router) {
    this.eventService = eventService;
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.eventService.getEventById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editEvent = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home");
  }

  edit() {
    this.eventService.updateEvent(this.editEvent.eventID, this.editEvent).subscribe(res => {
      alert("Changes have been updated");
      this.router.navigateByUrl("home");
    });
  }
}
