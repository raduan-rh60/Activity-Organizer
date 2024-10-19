import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCategroiesComponent } from './show-all-categories.component';

describe('ShowAllCategroiesComponent', () => {
  let component: ShowAllCategroiesComponent;
  let fixture: ComponentFixture<ShowAllCategroiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllCategroiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllCategroiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
