import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLinkStyle]'
})

export class LinkStyleDirective {

  @Input() defaultColor: string;

  @Input() mouseOvrColor: string;
  
  constructor(private el: ElementRef) {
    this.defaultColor = "#FFFFFF"
    this.mouseOvrColor = "#c9be72";
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.defaultColor;
    this.el.nativeElement.style.textDecoration = "none";
  }

  @HostListener('mouseover') onMouseover() {
    this.el.nativeElement.style.color= this.mouseOvrColor;
    // console.log(this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].style.color="#c9be72");

  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.color = this.defaultColor;
  }
}
