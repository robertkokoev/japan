import { CityAdapter, City } from './city';
import { Observable } from 'rxjs';

export abstract class AbstractCityService {
  abstract getCities(selectedTag: string): Observable<City[]>;
}