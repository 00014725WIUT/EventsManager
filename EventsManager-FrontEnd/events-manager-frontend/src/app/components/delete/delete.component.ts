import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../event.service';
import { CommonModule } from '@angular/common';
import { EventModel } from '../../event.model';

@Component({
  selector: 'app-delete',
  standalone: true,
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  imports: [CommonModule]
})

export class DeleteComponent {
  eventService = inject(EventService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  deleteEvent: EventModel = {
    eventID: 0,
    eventName:'',
    eventDate: new Date(),
    location: '',
    cost:  0,
    language: ''
  }

  
  ngOnInit() {
    this.eventService.getEventById(this.activatedRoute.snapshot.params["id"]).subscribe((result : EventModel) => {
      this.deleteEvent = result
    });
  }

  HomeBtnClick(){
    this.router.navigateByUrl("home")
  }

  onDeleteBtnClick(id:number) {
    console.log(this.deleteEvent.eventID);
    this.eventService.deleteEvent(this.deleteEvent.eventID)
    alert('Event deleted successfully');
    this.router.navigateByUrl('/events');  
  }
}
