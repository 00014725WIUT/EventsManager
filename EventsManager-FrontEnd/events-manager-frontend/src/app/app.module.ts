import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventService } from './event.service';
import { HttpHandler } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent
  ],
  providers: [
    { provide: HttpClient, useClass: HttpClient, deps: [HttpHandler] },  // Enable fetch APIs for HttpClient
    EventService
  ],
  bootstrap: []
})
export class AppModule { }
