import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntertainmentComponent } from './intertainment.component';

describe('IntertainmentComponent', () => {
  let component: IntertainmentComponent;
  let fixture: ComponentFixture<IntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntertainmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
