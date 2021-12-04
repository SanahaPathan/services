import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let txt = value;
    console.log(args);
    return value *2;
  }

}
