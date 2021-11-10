import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from '../place';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listLoadedPlaces: Place[];
  constructor(private placesServices: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesServices.getPlaces();
    this.listLoadedPlaces = this.loadedPlaces.slice(1);
  }

}
