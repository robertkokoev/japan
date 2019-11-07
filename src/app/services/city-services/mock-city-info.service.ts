import { CityInfo } from "./city-info";
import { Injectable } from '@angular/core';
import { AbstractCityInfoService } from './abstract.city-info.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MockCityInfoService extends AbstractCityInfoService {

  constructor(private http: HttpClient) {
    super();
  }

  getInfo(title: string): Observable<CityInfo | undefined> {
    return this.http
      .get<CityInfo[]>('../assets/test-data/city-info.json')
      .pipe(map(data => {
        return data.find(c => c.title == title)
      })) 
  }
}