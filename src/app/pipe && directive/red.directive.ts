import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef , private render: Renderer2) {
    // this.elementRef.nativeElement.style.background = 'blue';

  }
  @HostListener('mouseenter')
  onStat(){
    this.render.setStyle(this.elementRef.nativeElement, 'background', 'silver');
  }

  @HostListener('mouseleave')
  onExit(){
    this.render.setStyle(this.elementRef.nativeElement, 'background', 'white');
  }

}
