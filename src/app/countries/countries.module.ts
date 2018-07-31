import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { RouterModule, Router } from '@angular/router';
import { SingleCountryComponent } from './single-country/single-country.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {  path: 'singlecountry/:countryname', component: SingleCountryComponent },
    ])
  ],
  declarations: [AllcountriesComponent, SingleCountryComponent],
  exports: [AllcountriesComponent, SingleCountryComponent]

})
export class CountriesModule { }
