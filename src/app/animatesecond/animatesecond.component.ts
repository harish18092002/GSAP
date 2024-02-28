import { Component, OnInit, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-animatesecond',
  templateUrl: './animatesecond.component.html',
  styleUrls: ['./animatesecond.component.css']
})
export class AnimatesecondComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Rotate the 'Vision' word in place
    gsap.to('.vision', {
      rotation: 360,
      transformOrigin: 'center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    // Hide the 'Reality' word initially
    gsap.set('.reality', { opacity: 0 });

    // Show the 'Reality' word when it comes to the center of the screen
    gsap.to('.reality', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none none' // Play animation when the trigger is in the center of the viewport
      }
    });
  }

  ngAfterViewInit(): void {
    // Horizontal scroll animation
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

    // Animate the exclamation mark
    gsap.to('.exclamation', { y: -15, repeat: -1, yoyo: true, duration: 0.5 });
  }
}
