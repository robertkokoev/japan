import { Component, OnInit } from '@angular/core';
import { AbstractNewsService } from '../../services/news-services/abstract-news.service';
import { News } from '../../services/news-services/news';
import { HttpNews } from '../../services/news-services/http-news.service';
import { MockNewsService } from '../../services/news-services/mock.news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [HttpNews]
})
export class NewsComponent implements OnInit {

  private _news: News[] = [];

  constructor(private httpService: AbstractNewsService) { }

  ngOnInit() {
    this.httpService.getNews().subscribe(n => {
      this.news = n.reverse();
      console.log(n);
      console.log(this._news);
    });
  }

  get news(): News[] {
    return this._news;
  }

  set news(n: News[]) {
    this._news = n;
  }

}
