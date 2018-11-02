import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

@HostListener('mouseover')  over() {
  this.renderer.addClass(this.el.nativeElement,'rotate');
  this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.5em');
  console.log('over called');
  console.log(this.el.nativeElement);
}
@HostListener('mouseout') out() {
  this.renderer.removeClass(this.el.nativeElement, 'rotate');
  this.renderer.removeStyle(this.el.nativeElement, 'font-size');
  console.log('out called');
  console.log(this.el.nativeElement);
}
}
