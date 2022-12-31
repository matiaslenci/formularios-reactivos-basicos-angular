import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmploPipesComponent } from './ejmplo-pipes.component';

describe('EjmploPipesComponent', () => {
  let component: EjmploPipesComponent;
  let fixture: ComponentFixture<EjmploPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmploPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmploPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
