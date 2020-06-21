import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './../services/data.service';
import { CovidData } from 'src/app/models/data.model';
import { Router } from '@angular/router';
import { DashboardComponent } from '../routes/dashboard/dashboard.component';

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(value: any): string {
      return value;
      }
    }
