import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
// for gsap libraries
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-animat1',
  templateUrl: './animat1.component.html',
  styleUrls: ['./animat1.component.css']
})
export class Animat1Component {
  ngOnInit() {
    this.setupGsap();
    console.log("Hi harish")
  }

  setupGsap(): void {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: ' center top', // when the top of the trigger hits the top of the viewport
        end: '+=200', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.from('.box', {
      backgroundColor: '#28a92b',
      rotation: 360,
      scale: 0,
    });
  }
}
