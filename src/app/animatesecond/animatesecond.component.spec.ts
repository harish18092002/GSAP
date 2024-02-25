import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatesecondComponent } from './animatesecond.component';

describe('AnimatesecondComponent', () => {
  let component: AnimatesecondComponent;
  let fixture: ComponentFixture<AnimatesecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatesecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
