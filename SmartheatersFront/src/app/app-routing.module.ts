import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeaterComponent } from './components/heaters/components/add-heater/add-heater.component';
import { HeaterDetailsComponent } from './components/heaters/components/heater-details/heater-details.component';
import { EditHeaterComponent } from './components/heaters/components/edit-heater/edit-heater.component';

import { HeatersComponent } from './components/heaters/heaters.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: 'heaters', component: HeatersComponent },
  { path: 'add-heater', component: AddHeaterComponent },
  { path: 'edit-heater', component: EditHeaterComponent },
  { path: 'heater-details', component: HeaterDetailsComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: '', component: HeatersComponent },
  { path: '**', redirectTo: 'heaters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
