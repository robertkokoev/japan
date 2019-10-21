import { Component, OnInit } from '@angular/core';
import { HistoryGetService } from 'src/app/services/history-get.service';
import { HistoryInfo } from 'src/app/services/history-info';
import { HistoryAbstractService } from 'src/app/services/history-abstract.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryGetService]
})
export class HistoryComponent implements OnInit {

  element: any;
  info!: HistoryInfo; 
  era!: HistoryInfo;

  constructor(private httpService: HistoryAbstractService) { }

  showChild(id: string) {
    this.element = document.getElementById(id);
    this.element.childNodes[1].classList.toggle('invisible');
  }

  selectEra(era: string) {
    this.httpService.getHistory(era).subscribe(data => {
      this.era = data;
      console.log(data);
    });
    // this.info.forEach(e => {
    //   if (e.era == era) {
    //     this.era = e;
    //   }
    // });
  }

  ngOnInit() {
    // this.httpService.getHistory().subscribe(data => {
    //   this.info = data;
    //   console.log(data);
    // });
  }

}