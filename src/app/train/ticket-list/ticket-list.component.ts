import { Component, OnInit } from '@angular/core';
import { TrainsService } from 'src/app/trains.service';
import { TicketSearchResult } from '../model/ticketSearchResult';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  ticketSearch: TicketSearchResult = new TicketSearchResult();

  params = {
    sort: 'departure',
    sortDirection: 'desc',
  };

  constructor(private service: TrainsService) {}

  ngOnInit() {
    this.getTickets()
  }


  getTickets() {
    this.service.getTickets(this.params).subscribe({
      next: (data: TicketSearchResult) => {
        this.ticketSearch = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onDeleteTicket(id: number) {
    this.service.deleteTicket(id).subscribe({
      next: (data: any) => {
        this.getTickets()
        
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }
}
