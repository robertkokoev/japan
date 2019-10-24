import { Component, OnInit } from '@angular/core';
import { HistoryGetService } from 'src/app/services/history-services/history-get.service';
import { HistoryInfo } from 'src/app/services/history-services/history-info';
import { HistoryAbstractService } from 'src/app/services/history-services/history-abstract.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryGetService]
})
export class HistoryComponent implements OnInit {

  private _element: Element | undefined;
  private _era: HistoryInfo | undefined;
  visibility: boolean = false;
  activeBtn: boolean = true;

  constructor(private httpService: HistoryAbstractService) { }

  get era(): HistoryInfo | undefined {
    return this._era;
  }
  set era(era: HistoryInfo | undefined) {
    this._era = era;
  }

  get element(): Element| undefined {
    return this._element;
  }
  set element(e: Element| undefined) {
    this._element = e;
  }

  showChild(id: string) {
    if (document.getElementById(id)){
      this.element = document.getElementById(id)!.children[1];
      this.element!.classList.toggle('invisible');  
    }
  }

  selectEra(era: string) {
    this.httpService.getHistory(era).subscribe(data => {
      this.era = data;
      console.log(data);
    });
  }

  toggleMenu() {
    this.visibility = !this.visibility;
    this.activeBtn = !this.activeBtn;
  }

  ngOnInit() {
    
  }

}
