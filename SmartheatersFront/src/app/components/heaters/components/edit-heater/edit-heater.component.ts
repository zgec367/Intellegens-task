import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Heater } from 'src/app/models/Heater';
import { HeaterReadingsApiService } from 'src/app/services/heater-readings-api.service';
import { HeaterApiService } from 'src/app/services/heater-api.service';
@Component({
  selector: 'app-edit-heater',
  templateUrl: './edit-heater.component.html',
  styleUrls: ['./edit-heater.component.css'],
})
export class EditHeaterComponent implements OnInit {
  saving: boolean = false;

  soldHeater: Heater;
  error: boolean = false;
  loading: boolean = true;
  heaterImages = [
    {
      Url:
        'https://images-na.ssl-images-amazon.com/images/I/71s25bXiceL._AC_SL1500_.jpg',
    },
    {
      Url:
        'https://images-na.ssl-images-amazon.com/images/I/91PiTv9EwNL._AC_SL1500_.jpg',
    },
    {
      Url:
        'https://media.kohlsimg.com/is/image/kohls/2327187_White?wid=1200&hei=1200&op_sharpen=1',
    },
    {
      Url:
        'https://images-na.ssl-images-amazon.com/images/I/81QojZc6aCL._AC_SL1500_.jpg',
    },
  ];
  constructor(
    private heaterReadingsService: HeaterReadingsApiService,
    private heaterService: HeaterApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    var routeData: any = { ...this.route.snapshot.params };
    this.soldHeater = routeData;
  }

  saveData(form: NgForm) {
    if (form.valid) {
      this.saving = true;

      this.heaterService.updateHeater(this.soldHeater).subscribe({
        next: (result) => {
          this.saving = false;
          this.router.navigate(['/heaters']);
        },
        error: (error) => {
          this.saving = false;
          this.error = true;
          console.log(error);
          this.router.navigate(['/error-page']);
        },
      });
    }
  }
  onImageClick(image: string) {
    this.soldHeater.image = image;
    console.log(this.soldHeater);
  }
}
