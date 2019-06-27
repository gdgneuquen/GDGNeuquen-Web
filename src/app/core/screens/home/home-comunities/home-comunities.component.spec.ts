import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComunitiesComponent } from './home-comunities.component';

describe('HomeComunitiesComponent', () => {
  let component: HomeComunitiesComponent;
  let fixture: ComponentFixture<HomeComunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
