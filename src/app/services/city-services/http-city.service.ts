import { AbstractCityService } from './abstract-city.service';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { Observable } from 'rxjs';

export class HttpService extends AbstractCityService {

  constructor(private http: HttpClient){
    super();
  }

  getCities(selectedTag: string): Observable<City[]> {
    return  this.http.get<City[]>('');
  }
}