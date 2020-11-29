import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Heater } from 'src/app/models/Heater';
import { HeaterApiService } from 'src/app/services/heater-api.service';

@Component({
  selector: 'app-add-heater',
  templateUrl: './add-heater.component.html',
  styleUrls: ['./add-heater.component.css'],
})
export class AddHeaterComponent implements OnInit {
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
  saving: boolean = false;
  error: boolean = false;
  soldHeater: Heater = {
    id: null,
    client: null,
    image: null,
    address: null,
  };
  interval: any;
  constructor(
    private heaterService: HeaterApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  saveData(form: NgForm) {
    if (form.valid && this.soldHeater.image != null) {
      this.saving = true;

      this.heaterService.addSoldHeater(this.soldHeater).subscribe({
        next: (result) => {
          this.saving = false;
          this.snackBar.open('Heater successfully added', '', {
            duration: 2000,
          });
          this.router.navigate(['/heaters']);
        },
        error: (error) => {
          this.saving = false;
          this.error = true;
          console.log(error);
          this.router.navigate(['/error-page']);
        },
      });
      console.log(this.soldHeater);
    }
  }
  onImageClick(image: string) {
    this.soldHeater.image = image;
  }
}
