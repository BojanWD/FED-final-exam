import { Component, OnInit } from '@angular/core';
import { TrainsService } from 'src/app/trains.service';
import { StationResult } from '../model/station';
import { TrainSearchResult } from '../model/trainSearchResult';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trains: TrainSearchResult = new TrainSearchResult();
  stationsResult: StationResult[] = [];
  constructor(private service: TrainsService) {}

  params = {
    filter: {
      to: '',
      from: '',
    },
  };

  ngOnInit() {
    this.getTrains();
    this.getStations()
  }

  getTrains() {
    this.service.getTrains(this.params).subscribe({
      next: (data: TrainSearchResult) => {
        this.trains = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getStations() {
    this.service.getStations().subscribe({
      next: (data: StationResult[]) => {
        this.stationsResult = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }

  onFilterFromTo() {
    if (this.params.filter.from === 'Any') {
      this.params.filter.from = ''
    }     
    if (this.params.filter.to === 'Any') {
      this.params.filter.to = ''
    }
    this.getTrains()
  }

  getHourMin(n: number): string {
    let hours = Math.floor(n/60)
    let minutes = Math.floor(n%60)

    let res = ''

    if (hours < 10) {
      res += `0${hours}:`
    } else {
      res+= `${hours}:`
    } 
 
    if (minutes < 10) {
      res += `0${minutes}`
    } else {
      res+= `${minutes}`
    } 

    return res
  }
}
