import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityDetailsService, CityDetails } from 'src/app/services/city-details-services/city-details.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
  providers: [CityDetailsService]
})
export class CityDetailsComponent implements OnInit {

  city: CityDetails | undefined;

  constructor(private route: ActivatedRoute, private cityDetails: CityDetailsService, private http: HttpClient) { }

  ngOnInit() {
    let title = this.route.snapshot.params['title'];
    this.cityDetails.getDetails(title).subscribe(data => {
      this.city = data;
    })
    // this.city = this.cityDetails.getDetails(title);
  }

  

}
