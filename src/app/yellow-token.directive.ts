import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowToken]'
})
export class YellowTokenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#8B8000';
  }

}
