import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNextEventComponent } from './home-next-event.component';

describe('HomeNextEventComponent', () => {
  let component: HomeNextEventComponent;
  let fixture: ComponentFixture<HomeNextEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNextEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNextEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
