import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

export class CityDetailsService {

  constructor(private http: HttpClient) {
    
  }

  getDetails(title: string): Observable<CityDetails | undefined> {
    // return CITIES_DETAILS.find(c => c.title == title) 
    return this.http
      .get<CityDetails[]>('../assets/test-data/city-details.json')
      .pipe(map(data => {
        return data.find(c => c.text.title == title) 
      }))
  }

}

export interface CityDetails {
  text: TextDetails;
  info: InfoDetails;
}

export interface TextDetails {
  title: string;
  description: string;
}

export interface InfoDetails {
  original_title: string;
  region: string;
  island: string;
  area: string;
  popuation: string;
  flag: string;
  arms: string;
}