import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledMessagesListComponent } from './scheduled-messages-list.component';

describe('ScheduledMessagesListComponent', () => {
  let component: ScheduledMessagesListComponent;
  let fixture: ComponentFixture<ScheduledMessagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledMessagesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
