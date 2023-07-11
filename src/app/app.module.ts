import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantListComponent } from './plants/plant-list/plant-list.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { PlantItemComponent } from './plants/plant-item/plant-item.component';
import { PlantEditComponent } from './plants/plant-edit/plant-edit.component';
import { PlantsComponent } from './plants/plants.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlantListComponent,
    PlantDetailComponent,
    PlantItemComponent,
    PlantEditComponent,
    PlantsComponent,
    DiscoverComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
