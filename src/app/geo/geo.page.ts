import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {
  map: Map;


  constructor() { }

  ngOnInit() {
    this.leafletMap();
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId3').setView([-2.9068646, -79.0255677], 8);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);


    marker([-2.8993377, -79.0036813]).addTo(this.map)
        .bindPopup('Juan Perez')
        .openPopup();

    marker([-2.9068646, -79.0255677]).addTo(this.map)
        .bindPopup('Carlos S.A.')
        .openPopup();

    marker([-2.8890017, -79.0122482]).addTo(this.map)
        .bindPopup('MV S.A.')
        .openPopup();


  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
