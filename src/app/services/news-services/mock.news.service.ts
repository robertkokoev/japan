import { AbstractNewsService } from './abstract-news.service';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { Observable } from 'rxjs';

export class MockNewsService extends AbstractNewsService {

  news: News[] = [
    {
      headline: 'Lorem ipsum 1',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 2',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 3',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 4',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 5',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 6 wewq qwerfw per wef  3rg wp; pwkefw kef ',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: ''
    },
    {
      headline: 'Lorem ipsum 7',
      description: 'Texte xtetx etx etextetxet xe txetxetxe txet',
      text: '',
      backgroundImgUrl: 'https://cdn25.img.ria.ru/images/155921/10/1559211040_0:0:3072:1728_436x0_80_0_0_6174c9e1bdd4dd7b887ee6b1e79b746d.jpg.webp'
    }, 
    {
      headline: 'Губернатор Токио в шутку предложила провести Олимпиаду на Курилах',
      description: 'Губернатор Токио Юрико Коикэ предложила провести марафонский забег и соревнования по спортивной ходьбе на Олимпиаде-2020 на Курильских островах, сообщает Kyodo.',
      text: '',
      backgroundImgUrl: 'https://cdn25.img.ria.ru/images/152157/43/1521574352_0:161:3071:1888_600x0_80_0_0_1acaf3b6aab96118fc3e853b67a10d44.jpg.webp'
    }
  ]

  getNews(): Observable<News[]> {
    return new Observable<News[]> (obs => {
      obs.next(this.news.slice(-6))
    })
  }

}