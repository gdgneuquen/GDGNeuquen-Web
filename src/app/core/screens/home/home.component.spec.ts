import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';
import { HomeNextEventComponent } from './home-next-event/home-next-event.component';
import { HomeComunitiesComponent } from './home-comunities/home-comunities.component';
import { HomeSponsorsComponent } from './home-sponsors/home-sponsors.component';
import { MaterialModule } from '../../../material/material.module';
import { from } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,
        CarrouselHomeComponent,
        HomeNextEventComponent,
        HomeComunitiesComponent,
        HomeSponsorsComponent
      ],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
