import { Component } from '@angular/core';
import { PlantsService } from '../plants/plants.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {
  constructor(public plantService: PlantsService) {}
}
