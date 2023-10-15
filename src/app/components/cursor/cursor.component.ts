import { Component, HostBinding, ElementRef, Renderer2, NgZone, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements AfterViewInit {
  @HostBinding('class.content') contentHovered: boolean = false;
  cursorOuterStyle: { left: string, top: string } = { left: '0', top: '0' };
  cursorInnerStyle: { left: string, top: string } = { left: '0', top: '0' };
  @ViewChild('cursorOuter', { static: true }) cursorOuter!: ElementRef;
  @ViewChild('cursorInner', { static: true }) cursorInner!: ElementRef;
  hoverAnchor: boolean = false;

  private mouseX: number = 0;
  private mouseY: number = 0;
  private innerCursorSpeed: number = 1; // Adjust this value for speed

  constructor(private el: ElementRef, private ngZone: NgZone, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.addAnchorHoverClass();
  }

  private addAnchorHoverClass() {
    const anchorElements = document.querySelectorAll('a');

    anchorElements.forEach((element) => {
      this.renderer.listen(element, 'mouseenter', () => {
        this.hoverAnchor = true;
        this.renderer.addClass(this.cursorOuter.nativeElement, 'extra-class');
        this.renderer.addClass(this.cursorInner.nativeElement, 'extra-class');
      });

      this.renderer.listen(element, 'mouseleave', () => {
        this.hoverAnchor = false;
        this.renderer.removeClass(this.cursorOuter.nativeElement, 'extra-class');
        this.renderer.removeClass(this.cursorInner.nativeElement, 'extra-class');
      });
    });
  }

  @HostListener('mouseover', ['$event.target'])
  onContentMouseOver(target: any): void {
    this.contentHovered = true;
  }

  @HostListener('mouseout', ['$event.target'])
  onContentMouseOut(target: any): void {
    this.contentHovered = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Use ngZone.runOutsideAngular to improve performance
    this.ngZone.runOutsideAngular(() => {
      this.updateCursorStyles();
    });
  }

  private updateCursorStyles(): void {
    const deltaX = this.mouseX - parseInt(this.cursorOuterStyle.left);
    const deltaY = this.mouseY - parseInt(this.cursorOuterStyle.top);

    this.cursorOuterStyle = {
      left: this.mouseX + 'px',
      top: this.mouseY + 'px'
    };

    this.cursorInnerStyle = {
      left: (parseInt(this.cursorInnerStyle.left) + deltaX * this.innerCursorSpeed) + 'px',
      top: (parseInt(this.cursorInnerStyle.top) + deltaY * this.innerCursorSpeed) + 'px'
    };
  }
}
