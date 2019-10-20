import { AbstractNewsService } from './abstract-news.service';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { Observable } from 'rxjs';

export class HttpNews extends AbstractNewsService {

  constructor(private http: HttpClient) {
    super();
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('');
  }
}