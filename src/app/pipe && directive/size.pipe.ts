import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (args.includes('apper')){
      // value = value.toUpperCase();
    }
    return value +  '='   + value;
  }

}
