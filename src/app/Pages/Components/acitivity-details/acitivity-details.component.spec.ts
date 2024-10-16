import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitivityDetailsComponent } from './acitivity-details.component';

describe('AcitivityDetailsComponent', () => {
  let component: AcitivityDetailsComponent;
  let fixture: ComponentFixture<AcitivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcitivityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcitivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
