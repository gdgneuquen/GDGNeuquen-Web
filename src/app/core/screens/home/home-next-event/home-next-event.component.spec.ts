import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../../material/material.module';
import { HomeNextEventComponent } from './home-next-event.component';

describe('HomeNextEventComponent', () => {
  let component: HomeNextEventComponent;
  let fixture: ComponentFixture<HomeNextEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNextEventComponent],
      imports: [MaterialModule]
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
