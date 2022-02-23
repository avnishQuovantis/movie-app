import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListComponent } from './list.component';

describe('HomeListComponent', () => {
  let component: HomeListComponent;
  let fixture: ComponentFixture<HomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
