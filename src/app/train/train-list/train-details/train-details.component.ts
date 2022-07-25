import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrainsService } from 'src/app/trains.service';
import { Train } from '../../model/train';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
})
export class TrainDetailsComponent implements OnInit {
  id: number = 0;
  train: Train = new Train();
  constructor(private route: ActivatedRoute, private service: TrainsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getTrain();
    });
  }

  getTrain() {
    this.service.getTrain(this.id).subscribe({
      next: (data) => {
        console.log(data)
        this.train = data;
      },
      error: (error) => {
        console.log('Error retreiving from server. Reason: ', error.statusText);
      },
    });
  }
}
