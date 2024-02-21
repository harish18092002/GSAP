import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animat1Component } from './animat1.component';

describe('Animat1Component', () => {
  let component: Animat1Component;
  let fixture: ComponentFixture<Animat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animat1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
