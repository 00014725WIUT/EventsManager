import { Injectable, inject } from '@angular/core';
import { EventModel } from './event.model';
import { HttpClient} from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7059/api/Events'; 
  httpClient = inject(HttpClient);
  constructor() {}

  getEvents(){
    return this.httpClient.get<EventModel[]>("https://localhost:7059/api/Event"); // Adjust endpoint for getting all events
  }

  getEventById(id: number) {
    return this.httpClient.get<EventModel>(`${this.apiUrl}/GetByID/${id}`); // Adjust endpoint for getting event by ID
  }

  createEvent(event: EventModel) {
    return this.httpClient.post<EventModel>(`${this.apiUrl}/Create`, event); // Adjust endpoint for creating event
  }

  updateEvent(id: number, event: EventModel) {
    return this.httpClient.put<EventModel>(`${this.apiUrl}/Update`, event); // Adjust endpoint for updating event
  }

  deleteEvent(id: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/Delete/${id}`); // Adjust endpoint for deleting event
  }
}