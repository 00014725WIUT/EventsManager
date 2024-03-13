import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from './event.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://localhost:7059/api/events'; 


  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}`);
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.apiUrl}`, event);
  }

  updateEvent(id: number, event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}