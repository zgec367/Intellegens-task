import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './shared/material/material.module';
import { HeatersComponent } from './components/heaters/heaters.component';
import { AddHeaterComponent } from './components/heaters/components/add-heater/add-heater.component';
import { HeaterDetailsComponent } from './components/heaters/components/heater-details/heater-details.component';
import { EditHeaterComponent } from './components/heaters/components/edit-heater/edit-heater.component';
import { HeaterTileComponent } from './components/heaters/components/heater-tile/heater-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeatersComponent,
    AddHeaterComponent,
    HeaterDetailsComponent,
    EditHeaterComponent,
    HeaterTileComponent,
    DeleteDialogComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
