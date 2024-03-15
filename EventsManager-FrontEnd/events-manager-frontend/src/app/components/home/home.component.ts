import { Component, inject} from '@angular/core';
import { EventService } from '../../event.service';
import { EventModel } from '../../event.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventService = inject(EventService); 
  ngOnInit() {

    this.eventService.getEvents().subscribe((result) => {
      this.events = result;
    });
  }

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

  events: EventModel[] = 
  [
    {
      "eventID": 1,
      "eventName": "Tech Summit 2024",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Convention Center, City X",
      "cost": 150,
      "language": "English"
    },
    {
      "eventID": 2,
      "eventName": "Startup Pitch Day",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Innovation Hub, City Y",
      "cost": 50,
      "language": "English"
    },
    {
      "eventID": 3,
      "eventName": "Art and Music Festival",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Park Amphitheater, City Z",
      "cost": 25,
      "language": "Multilingual"
    },
    {
      "eventID": 4,
      "eventName": "Data Science Workshop",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "University Auditorium, City X",
      "cost": 75,
      "language": "English"
    },
    {
      "eventID": 5,
      "eventName": "Food Tasting Expo",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Culinary Center, City Y",
      "cost": 40,
      "language": "Multilingual"
    },
    {
      "eventID": 6,
      "eventName": "Fitness Challenge Marathon",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "City Park, City Z",
      "cost": 20,
      "language": "English"
    },
    {
      "eventID": 7,
      "eventName": "Blockchain Conference",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Tech Hub, City X",
      "cost": 100,
      "language": "English"
    },
    {
      "eventID": 8,
      "eventName": "Fashion Show Extravaganza",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Fashion Center, City Y",
      "cost": 60,
      "language": "Multilingual"
    },
    {
      "eventID": 9,
      "eventName": "AI and Robotics Expo",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Innovation Hall, City Z",
      "cost": 80,
      "language": "English"
    },
    {
      "eventID": 10,
      "eventName": "Environmental Sustainability Forum",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Green Convention Center, City X",
      "cost": 30,
      "language": "Multilingual"
    },
    {
      "eventID": 11,
      "eventName": "Mobile App Development Workshop",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Tech Institute, City Y",
      "cost": 50,
      "language": "English"
    },
    {
      "eventID": 12,
      "eventName": "Culinary Masterclass Series",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Gourmet Studio, City Z",
      "cost": 35,
      "language": "Multilingual"
    },
    {
      "eventID": 13,
      "eventName": "Virtual Reality Showcase",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "VR Center, City X",
      "cost": 70,
      "language": "English"
    },
    {
      "eventID": 14,
      "eventName": "Health and Wellness Expo",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Wellness Arena, City Y",
      "cost": 45,
      "language": "Multilingual"
    },
    {
      "eventID": 15,
      "eventName": "E-commerce Summit",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Commerce Center, City Z",
      "cost": 120,
      "language": "English"
    },
    {
      "eventID": 16,
      "eventName": "Film Festival Premiere",
      "eventDate":  new Date("2024-04-15T09:00:00Z"),
      "location": "Cinema Palace, City X",
      "cost": 55,
      "language": "Multilingual"
    },
    {
      "eventID": 17,
      "eventName": "Cybersecurity Symposium",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Security Hub, City Y",
      "cost": 90,
      "language": "English"
    },
    {
      "eventID": 18,
      "eventName": "Wine Tasting Soiree",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Vineyard Estate, City Z",
      "cost": 40,
      "language": "Multilingual"
    },
    {
      "eventID": 19,
      "eventName": "Astronomy Night Observation",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Observatory, City X",
      "cost": 25,
      "language": "English"
    },
    {
      "eventID": 20,
      "eventName": "Dance and Music Carnival",
      "eventDate": new Date("2024-04-15T09:00:00Z"),
      "location": "Dance Plaza, City Y",
      "cost": 35,
      "language": "Multilingual"
    }
  ]
  displayedColumns: string[] = ['EventId', 'EventName', 'EventDate', 'Location', 'Cost', 'Language', 'Actions'];
}
