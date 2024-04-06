import { Component, OnInit, Directive, ElementRef, } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-animatethird',
  templateUrl: './animatethird.component.html',
  styleUrls: ['./animatethird.component.css']
})
export class AnimatethirdComponent implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.setupObserver();
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.animateElement();
          observer.unobserve(entry.target);
        }
      });
    }, options);


    observer.observe(this.el.nativeElement);
  }

  private animateElement(): void {
    gsap.from(this.el.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1
    });
  }
}
