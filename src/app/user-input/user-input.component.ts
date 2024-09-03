import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  initial = signal<string>('0');
  duration = signal<string>('5');
  expected = signal<string>('5');
  annual = signal<string>('0');

  private investmentService = inject(InvestmentService);

  onSubmit():void {

    const calculation = {
      initialInvestment: +this.initial(),
      duration: +this.duration(),
      expectedReturn: +this.expected(),
      annualInvestment: +this.annual()
    }

    this.investmentService.calculateInvestmentResults( calculation );

    this.initial.set('0');
    this.duration.set('5');
    this.expected.set('5');
    this.annual.set('0');
    
  }

}
