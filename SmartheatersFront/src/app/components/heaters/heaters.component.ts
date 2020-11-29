import { Component, OnInit } from '@angular/core';
import { HeaterApiService } from 'src/app/services/heater-api.service';
import { Heater } from 'src/app/models/Heater';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heaters',
  templateUrl: './heaters.component.html',
  styleUrls: ['./heaters.component.css'],
})
export class HeatersComponent implements OnInit {
  soldHeaters: Heater[] = [];
  loading: boolean = true;
  error: boolean = false;
  errorMsg: string = '';
  filteredHeaters: Heater[];

  //filter for heaters
  _listFilterHeater: string;
  get listFilterHeater(): string {
    return this._listFilterHeater;
  }
  set listFilterHeater(value: string) {
    this._listFilterHeater = value;
    this.filteredHeaters = value
      ? this.performFilterHeater(this._listFilterHeater)
      : this.soldHeaters;
  }
  constructor(
    private heaterService: HeaterApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    //get sold heaters
    this.heaterService.getSoldHeaters().subscribe({
      next: (result) => {
        this.soldHeaters = result;
        this.filteredHeaters = this.soldHeaters;
        console.log(this.soldHeaters);
        this.loading = false;
      },
      error: (error) => {
        console.log(error);

        this.error = true;
        this.loading = false;
        if (error.error.message != null) {
          this.errorMsg = error.error.message;
        } else {
          this.router.navigate(['/error-page']);
        }
      },
    });
  }

  //receiving id from deleted heater and filtering list
  eventFromChild(id: number) {
    this.filteredHeaters = this.filteredHeaters.filter((h) => h.id !== id);
  }

  //filtering heters by client
  performFilterHeater(client: string): Heater[] {
    client = client.toLocaleLowerCase();
    return this.soldHeaters.filter(
      (heater: Heater) =>
        heater.client.toLocaleLowerCase().indexOf(client) !== -1
    );
  }
}
