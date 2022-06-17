import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateWord'
})
export class TranslateWordPipe implements PipeTransform {

  transform(value: any, word: string): string {
    return '';
  }

}
