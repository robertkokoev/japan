import { HistoryAbstractService } from "./history-abstract.service";
import { Observable } from 'rxjs';
import { HistoryInfo } from './history-info';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class MockHistoryService extends HistoryAbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  getHistory(era: string): Observable<HistoryInfo | undefined> {
    return this.http
      .get<HistoryInfo[]>('../assets/test-data/history.json')
      .pipe(map(data => {
        return data.find(e => e.era == era)
      }))
  }
}