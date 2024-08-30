import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  initial:string = '0';
  annual:string = '0';
  expexted:string = '5';
  duration:string = '10';



  onSubmit():void {
    
  }

}
