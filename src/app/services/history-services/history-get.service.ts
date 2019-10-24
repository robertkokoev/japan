import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryInfo } from './history-info';
import { Injectable } from '@angular/core';
import { HistoryAbstractService } from './history-abstract.service';

@Injectable()
export class HistoryGetService extends HistoryAbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  getHistory(era: string): Observable<HistoryInfo>{
    return this.http.get<HistoryInfo>('C:/angular/japan/src/app/_testData/historyData.json');
  }

}