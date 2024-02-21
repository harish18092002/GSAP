import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';


//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'scroll_velocity';
  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=400', // end after scrolling 500px beyond the start
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
