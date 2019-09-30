import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../../material/material.module';
import { HomeComunitiesComponent } from './home-comunities.component';

describe('HomeComunitiesComponent', () => {
  let component: HomeComunitiesComponent;
  let fixture: ComponentFixture<HomeComunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComunitiesComponent],
      imports: [MaterialModule]
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

  it('should render title in a h4 tag', () => {
    const fixture = TestBed.createComponent(HomeComunitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('GDG Neuquen');
  });
});
