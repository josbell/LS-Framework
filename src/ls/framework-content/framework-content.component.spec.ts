import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkContentComponent } from './framework-content.component';

describe('FrameworkContentComponent', () => {
  let component: FrameworkContentComponent;
  let fixture: ComponentFixture<FrameworkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
