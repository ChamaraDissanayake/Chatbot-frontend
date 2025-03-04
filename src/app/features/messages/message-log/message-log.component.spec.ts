import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLogComponent } from './message-log.component';

describe('MessageLogComponent', () => {
  let component: MessageLogComponent;
  let fixture: ComponentFixture<MessageLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
