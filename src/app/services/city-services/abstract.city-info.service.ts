import { Observable } from 'rxjs';
import { CityInfo } from './city-info';

export abstract class AbstractCityInfoService {
  abstract getInfo(title: string): Observable<CityInfo | undefined> 
}