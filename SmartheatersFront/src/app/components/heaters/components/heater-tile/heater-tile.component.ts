import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Heater } from 'src/app/models/Heater';
import { HeaterApiService } from 'src/app/services/heater-api.service';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-heater-tile',
  templateUrl: './heater-tile.component.html',
  styleUrls: ['./heater-tile.component.css'],
})
export class HeaterTileComponent implements OnInit {
  @Input() soldHeaters: Heater[] = [];
  @Output() sendIdToParent = new EventEmitter<number>();
  constructor(
    private heaterService: HeaterApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.soldHeaters);
  }

  //delete confirmation dialog
  deleteHeater(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      width: '500px',
      height: '200px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.data === true) {
        this.heaterService.deleteHeater(id).subscribe({
          next: (result) => {
            this.sendIdToParent.emit(id);
            this.snackBar.open('Heater successfully deleted', '', {
              duration: 2000,
            });
          },
          error: (error) => {
            this.snackBar.open(
              'Heater unsuccesfully deleted, please try later',
              '',
              {
                duration: 2000,
              }
            );
            console.log(error);
          },
        });
      }
    });
  }
}
