import { Component } from '@angular/core';
import { Plant } from '../plant.model';
import { MOCKPLANTS } from '../MOCKPLANTS';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent {
  plants: Plant[] = [];

  constructor() {
    this.plants = MOCKPLANTS;
    console.log(this.plants);
  }
}
