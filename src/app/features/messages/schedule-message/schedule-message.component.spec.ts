import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMessageComponent } from './schedule-message.component';

describe('ScheduleMessageComponent', () => {
  let component: ScheduleMessageComponent;
  let fixture: ComponentFixture<ScheduleMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
