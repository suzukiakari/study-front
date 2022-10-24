import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLinkStyleBox]'
})
export class LinkStyleBoxDirective {

  @Input() defaultColor: string;

  @Input() mouseOvrColor: string;
  
  constructor(private el: ElementRef) {
    this.defaultColor = "#FFFFFF"
    this.mouseOvrColor = "#c9be72";

    // 型を指定する方法調べる
    // this.aa = this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0];
  }

  ngOnInit(): void {
    this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].style.color=this.defaultColor;  
    // this.aa.style.color = this.defaultColor;
    this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].style.textDecoration = "none";
    this.el.nativeElement.childNodes[2].childNodes[0].style.color=this.defaultColor;  
  }

  @HostListener('mouseover') onMouseover() {
    this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].style.color=this.mouseOvrColor;
    // this.aa.style.color = this.defaultColor;
    this.el.nativeElement.childNodes[2].childNodes[0].style.color=this.mouseOvrColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].style.color = this.defaultColor;
    // this.aa.style.color = this.defaultColor;
    this.el.nativeElement.childNodes[2].childNodes[0].style.color=this.defaultColor;  
  }

}
