import { News } from './news';
import { Observable } from 'rxjs';

export abstract class AbstractNewsService {
  abstract getNews(): Observable<News[]>;
}