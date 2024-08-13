import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  final:any;
  transform(price: any,quantity:any): any {
    this.final=quantity * price;
    return this.final;
  }
}
