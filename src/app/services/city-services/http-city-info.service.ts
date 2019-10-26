import { AbstractCityInfoService } from './abstract.city-info.service';
import { CityInfo } from './city-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class HttpCityInfoService extends AbstractCityInfoService{

  constructor(private http: HttpClient) {
    super();
  }

  getInfo(title: string): Observable<CityInfo> {
    return this.http.get<CityInfo>('');
  }
}