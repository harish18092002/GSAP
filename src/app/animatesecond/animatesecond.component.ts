import { Component, ElementRef, HostListener } from '@angular/core';
import gsap from 'gsap'; // or import { gsap } from 'gsap/all';

@Component({
  selector: 'app-animatesecond',
  templateUrl: './animatesecond.component.html',
  styleUrls: ['./animatesecond.component.css']
})
export class AnimatesecondComponent {
  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll')
  onScroll() {
    const connectNowElement = this.elementRef.nativeElement.querySelector('.connect-now');
    const scrollVelocity = window.scrollY;

    gsap.to(connectNowElement, { x: scrollVelocity * 0.5 }); // Adjust the velocity multiplier as needed
  }
}
