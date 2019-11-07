import { Injectable } from '@angular/core';
import { City, CityAdapter } from './city';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractCityService } from './abstract-city.service';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MockCityService extends AbstractCityService{

  constructor(private http: HttpClient) {
    super();
   }

  adapt(arr: City[] ,selectedTag: string): CityAdapter[] {
    return arr.map(c => Object.assign(c, { displayedClass: 'notSelected' }) as CityAdapter)
      .filter(city => {
        return city.tag.some(tag => (tag == selectedTag));
      })
  } 

  getCities(selectedTag: string): Observable<City[]> {
    return this.http
    .get<City[]>('../assets/test-data/city.json')
    .pipe(map(data => {
      return this.adapt(data, selectedTag)
    }))
  }
  
}
