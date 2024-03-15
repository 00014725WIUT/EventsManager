import { Injectable, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { EventModel } from './event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7059/api/events'; 
  httpClient = inject(provideHttpClient);
  constructor() {}

  getEvents(){
    return this.httpClient.get<EventModel[]>(`${this.apiUrl}`);
  }

  getEventById(id: number) {
    return this.httpClient.get<EventModel>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: EventModel){
    return this.httpClient.post<EventModel>(`${this.apiUrl}`, event);
  }

  updateEvent(event: EventModel) {
    return this.httpClient.put<EventModel>(`${this.apiUrl}`, event);
  }

  deleteEvent(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}