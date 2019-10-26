import { Component, OnInit, Input } from '@angular/core';
import { City, CityAdapter } from '../../services/city-services/city';
import { CityInfo } from '../../services/city-services/city-info';
import { AbstractCityService } from 'src/app/services/city-services/abstract-city.service';
import { AbstractCityInfoService } from 'src/app/services/city-services/abstract.city-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  private _cities = Array<CityAdapter>();
  protected _cityInfo: CityInfo | undefined;
  @Input() private _cityTitle: string | undefined;

  constructor(private http: AbstractCityService, private httpInfo: AbstractCityInfoService) { }

  get cities(): CityAdapter[] {
    return this._cities;
  }
  set cities(c: CityAdapter[]) {
    this._cities = c;
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
    this.http.getCities(tag).subscribe(data => {
      this.cities = this.adapt(data, tag);
    });
  }

  showInfo(cityTitle: string): void {
    this.httpInfo.getInfo(cityTitle).subscribe(data => {
      this.cityInfo = data;
    })
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

  adapt(arr: City[] ,selectedTag: string): CityAdapter[] {
   return arr.map(c => Object.assign(c, { displayedClass: 'notSelected' }) as CityAdapter)
    .filter(city => {
      return city.tag.some(tag => (tag == selectedTag));
    })
  } 

  ngOnInit() {
  }
}