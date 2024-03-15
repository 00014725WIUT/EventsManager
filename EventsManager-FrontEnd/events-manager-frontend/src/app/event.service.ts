import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from './event.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7059/api/events'; 
  httpClient = inject(HttpClient);
  constructor() {}

  getEvents(): Observable<EventModel[]> {
    return this.httpClient.get<EventModel[]>(`${this.apiUrl}`);
  }

  getEventById(id: number): Observable<EventModel> {
    return this.httpClient.get<EventModel>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: EventModel): Observable<EventModel> {
    return this.httpClient.post<EventModel>(`${this.apiUrl}`, event);
  }

  updateEvent(id: number, event: EventModel): Observable<EventModel> {
    return this.httpClient.put<EventModel>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}