import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkFooterComponent } from './framework-footer.component';

describe('FrameworkFooterComponent', () => {
  let component: FrameworkFooterComponent;
  let fixture: ComponentFixture<FrameworkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
