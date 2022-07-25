import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrainsService } from 'src/app/trains.service';
import { Ticket } from '../train/model/ticket';
import { Train } from '../train/model/train';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  id: number = 0;
  train: Train = new Train();
  ticket: Ticket = new Ticket();
  disabled = true;
  constructor(private route: ActivatedRoute, private service: TrainsService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getTrain();
    });
  }

  getTrain() {
    this.service.getTrain(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.train = data;
      },
      error: (error) => {
        console.log('Error retreiving from server. Reason: ', error.statusText);
      },
    });
  }

  validateTicket() {
    if (this.ticket.name !== null && this.ticket.birthDate !== null) {
      this.disabled = false;
    }
  }

  buyTicket() {
    this.ticket.arrival = this.train.arrival;
    this.ticket.departure = this.train.departure;
    this.ticket.from = this.train.from;
    this.ticket.to = this.train.to;
    this.ticket.price = this.train.price;
    this.ticket.number = this.train.number;
    this.service.postTicket(this.ticket).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['tickets']);
      },
      error: (error) => {
        console.log('Error retreiving from server. Reason: ', error.statusText);
      },
    });
  }
}
