import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archivo'
})
export class ArchivoPipe implements PipeTransform {

  transform(value: string): string {
    const tipo = value.split(".")[1];
    return tipo;
  }

}
