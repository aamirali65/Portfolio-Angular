import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimationComponent } from './text-animation.component';

describe('TextAnimationComponent', () => {
  let component: TextAnimationComponent;
  let fixture: ComponentFixture<TextAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAnimationComponent]
    });
    fixture = TestBed.createComponent(TextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
