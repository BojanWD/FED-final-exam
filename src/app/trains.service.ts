import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { StationResult } from './train/model/station';
import { Ticket } from './train/model/ticket';
import { TicketSearchResult } from './train/model/ticketSearchResult';
import { Train } from './train/model/train';
import { TrainSearchResult } from './train/model/trainSearchResult';

const baseUrl = 'http://localhost:3000/api/trains';

@Injectable({
  providedIn: 'root',
})
export class TrainsService {
  constructor(private http: HttpClient) {}

  getTrains(params?: any): Observable<TrainSearchResult> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set(
          'filter',
          (params.filter && JSON.stringify(params.filter)) || ''
        ),
      };
    }
    return this.http.get(baseUrl, options).pipe(
      map((data: any) => {
        return new TrainSearchResult(data);
      })
    );
  }

  getTrain(id: number): Observable<Train> {
    return this.http.get(`${baseUrl}/${id}`).pipe(
      map((data: any) => {
        console.log(data);
        return new Train(data);
      })
    );
  }

  getStations(): Observable<StationResult[]> {
    return this.http.get('http://localhost:3000/api/stations').pipe(
      map((data: any) => {
        return data.map((el: any) => {
          return new StationResult(el);
        });
      })
    );
  }

  postTicket(ticket: Ticket): Observable<any> {
    return this.http.post('http://localhost:3000/api/tickets', ticket).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getTickets(params?: any): Observable<TicketSearchResult> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get('http://localhost:3000/api/tickets', options).pipe(
      map((data: any) => {
        return new TicketSearchResult(data);
      })
    );
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/tickets/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
