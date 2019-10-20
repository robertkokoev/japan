import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { City, CityAdapter } from '../services/city';
import { CityService } from '../services/city.service';
import { CityInfo } from '../services/cityInfo';
import { CityInfoService } from '../services/cityInfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _cities = Array<CityAdapter>();
  cityInfo?: CityInfo;
  @Input() cityTitle!: string;

  constructor(private cityService: CityService, private cityInfoService: CityInfoService) { }

  get cities(): CityAdapter[] {
    return this._cities;
  }

  hideMap(tag: string): void {
    this._cities = this.cityService.getCities(tag);
    this.asSelected(this.cityTitle)
    console.log(this.cityService.getCities(tag));
  }

  showInfo(cityTitle: string): void {
    this.cityInfo = this.cityInfoService.getCityInfo(cityTitle);
    this.asSelected(cityTitle);
  }

  asSelected(selectedCity: string) {
    this.cities.forEach(city => {
      city.displayedClass = 'notSelected';
      if (city.title == selectedCity){
       city.displayedClass = 'notSelected' ? 'selected' : 'notSelected'
      }
    })
 }

  ngOnInit() {
  }
}