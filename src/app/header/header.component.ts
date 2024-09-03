import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  
    <header class="center">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
      </svg>
      <h1>Investment Calculator</h1>
      <div>Enter your details and get instant insights to help you plan your financial future.</div>
      <div>A simple way to see how your money can grow over time!</div>
    </header>
  
  `,
  styles: `
  
    @import '../../styles.scss';

    header {
        @extend %card;
        div {
            font-weight: 400;
        }
    }
  
  `
})
export class HeaderComponent {

}
