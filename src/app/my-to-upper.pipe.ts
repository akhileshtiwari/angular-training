import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myToUpper'
})
export class MyToUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLocaleUpperCase();
  }

}
