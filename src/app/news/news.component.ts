import { Component, OnInit } from '@angular/core';
import { AbstractNewsService } from '../services/abstract-news.service';
import { News } from '../services/news';
import { HttpNews } from '../services/http-news.service';
import { MockNewsService } from '../services/mock.news.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [HttpNews]
})
export class NewsComponent implements OnInit {

  news!: News[];

  constructor(private httpService: AbstractNewsService) { }

  ngOnInit() {
    this.httpService.getNews().subscribe(n => {
      this.news = n.reverse();
      console.log(n);
      console.log(this.news);
    });
  }

}
