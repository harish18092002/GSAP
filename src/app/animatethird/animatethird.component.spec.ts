import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatethirdComponent } from './animatethird.component';

describe('AnimatethirdComponent', () => {
  let component: AnimatethirdComponent;
  let fixture: ComponentFixture<AnimatethirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatethirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatethirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
