import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { PlantEditComponent } from './plants/plant-edit/plant-edit.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { DiscoverComponent } from './discover/discover.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/discover', pathMatch: 'full' },
  { path: 'discover', component: DiscoverComponent },
  {
    path: 'plants',
    component: PlantsComponent,
    children: [
      { path: 'new', component: PlantEditComponent },
      { path: ':id', component: PlantDetailComponent },
      { path: ':id/edit', component: PlantEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
