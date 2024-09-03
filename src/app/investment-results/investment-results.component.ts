import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { OrdinalPipe } from '../ordinal.pipe';
import { InvestmentService } from '../investment.service';
import { ResultsData } from '../interfaces-types';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe,
    OrdinalPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  tHeadValues:string[] = [
    'Year',
    'Investment Value',
    'Interest (year)',
    'Total Interest',
    'Invested Capital'
  ];

  private investmentService = inject(InvestmentService);

  results = computed(
    () => this.investmentService.resultsData()
  );

  // alternative
  // results = this.investmentService.resultsData.asReadonly();

}
