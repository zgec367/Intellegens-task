import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';
import { Heater } from 'src/app/models/Heater';
import { HeaterReading } from 'src/app/models/HeaterReading';
import { ReadingsDto } from 'src/app/models/Reading';
import { formatDate } from '@angular/common';

import { HeaterReadingsApiService } from 'src/app/services/heater-readings-api.service';

@Component({
  selector: 'app-heater-details',
  templateUrl: './heater-details.component.html',
  styleUrls: ['./heater-details.component.css'],
})
export class HeaterDetailsComponent implements OnInit {
  readingsByDay: ReadingsDto[] = [];
  allReadings: HeaterReading[] = [];
  displayedColumns: string[] = ['date', 'time', 'temperature'];
  dataSource: MatTableDataSource<HeaterReading>;
  soldHeater: Heater;
  errorMsg: string = '';
  error: boolean = false;
  loading: boolean = true;
  chart: any = [];
  orderDates = [];
  currentMonth = Date.now();
  constructor(
    private heaterReadingsService: HeaterReadingsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let routeData: any = { ...this.route.snapshot.params };
    this.soldHeater = routeData;

    this.heaterReadingsService.getReadings(this.soldHeater.id).subscribe({
      next: (result) => {
        this.readingsByDay = result['readingsByDay'];
        this.allReadings = result['allReadings'];
        this.dataSource = new MatTableDataSource<HeaterReading>(
          this.allReadings
        );

        console.log(result);

        this.loading = false;
        this.dataSource._updateChangeSubscription();

        this.chart = new Chart('temperature-readings-chart', {
          type: 'line',
          data: {
            labels: this.readingsByDay.map((e) =>
              formatDate(e['date'], 'dd.', 'en-US')
            ),

            datasets: [
              {
                label: 'Temperature',
                fill: false,
                backgroundColor: 'rgb(66, 63, 63)',
                borderColor: 'rgb(66, 63, 63)',
                pointBorderColor: 'rgb(66, 63, 63)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(66, 63, 63)',
                pointHoverBorderColor: 'rgb(66, 63, 63)',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: this.readingsByDay.map((e) => e['averageTemp']),
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      error: (error) => {
        this.loading = false;

        console.log(error);
        this.error = true;
        this.errorMsg = error.error.message;
      },
    });
  }
}
