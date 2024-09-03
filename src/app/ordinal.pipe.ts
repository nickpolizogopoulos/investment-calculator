import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    
    if (!value && value !== 0)
      return '';

    let suffix = 'th';
    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) 
      suffix = 'st';

    else if (lastDigit === 2 && lastTwoDigits !== 12) 
      suffix = 'nd';
     
    else if (lastDigit === 3 && lastTwoDigits !== 13) 
      suffix = 'rd';

    return value + suffix;
    
  }

}