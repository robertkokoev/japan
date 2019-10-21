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
  protected _cityInfo: CityInfo | undefined;
  @Input() private _cityTitle: string | undefined;

  constructor(private cityService: CityService, private cityInfoService: CityInfoService) { }

  get cities(): CityAdapter[] {
    return this._cities;
  }

  get cityInfo(): CityInfo | undefined {
    return this._cityInfo;
  }

  set cityInfo(c: CityInfo | undefined) {
    this._cityInfo = c;
  } 

  get cityTitle(): string | undefined{
    return this._cityTitle;
  }

  set cityTitle(c: string | undefined){
    this._cityTitle = c;
  }

  hideMap(tag: string): void {
    this._cities = this.cityService.getCities(tag);
    console.log(this.cityService.getCities(tag));
  }

  showInfo(cityTitle: string): void {
    this.cityInfo = this.cityInfoService.getCityInfo(cityTitle);
    this.asSelected(cityTitle);
  }

  asSelected(selectedCity: string | undefined) {
    if (selectedCity){
      this.cities.forEach(city => {
        city.displayedClass = 'notSelected';
        if (city.title == selectedCity){
         city.displayedClass = 'notSelected' ? 'selected' : 'notSelected'
        }
      })  
    }
 }

  ngOnInit() {
  }
}