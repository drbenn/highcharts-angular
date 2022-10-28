import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGaugeComponent } from './activity-gauge.component';

describe('ActivityGaugeComponent', () => {
  let component: ActivityGaugeComponent;
  let fixture: ComponentFixture<ActivityGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityGaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
