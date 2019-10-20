import { Observable } from 'rxjs';
import { HistoryInfo } from './history-info';

export abstract class HistoryAbstractService {
  abstract getHistory(era: string) : Observable<HistoryInfo>
}