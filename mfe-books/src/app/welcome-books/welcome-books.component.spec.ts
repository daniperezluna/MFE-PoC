import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBooksComponent } from './welcome-books.component';

describe('WelcomeBooksComponent', () => {
  let component: WelcomeBooksComponent;
  let fixture: ComponentFixture<WelcomeBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
