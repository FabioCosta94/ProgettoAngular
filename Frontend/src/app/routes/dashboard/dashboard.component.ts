import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { CovidData } from 'src/app/models/data.model';
import { Router } from '@angular/router';
import { SearchCountryPipe } from '../../pipes/search-country.pipe';
import { faAd } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faAd = faAd;

  constructor( private dataService: DataService, private router : Router) { }

  ngOnInit(): void {
    this.getEntries()
  }

  public covidData: CovidData [];

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.covidData = response;
    })
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

}
