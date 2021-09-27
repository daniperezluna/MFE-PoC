import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBalanceComponent } from './shared-balance.component';

describe('SharedBalanceComponent', () => {
  let component: SharedBalanceComponent;
  let fixture: ComponentFixture<SharedBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
