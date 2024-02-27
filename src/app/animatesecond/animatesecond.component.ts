
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-animatesecond',
  templateUrl: './animatesecond.component.html',
  styleUrls: ['./animatesecond.component.css']
})


export class AnimatesecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.horizontal-section', {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top top',
        end: () => window.innerWidth * 4,
        scrub: 3,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }

}
