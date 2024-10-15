import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNotificationComponent } from './side-notification.component';

describe('SideNotificationComponent', () => {
  let component: SideNotificationComponent;
  let fixture: ComponentFixture<SideNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
