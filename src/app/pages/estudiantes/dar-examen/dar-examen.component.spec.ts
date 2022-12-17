import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarExamenComponent } from './dar-examen.component';

describe('DarExamenComponent', () => {
  let component: DarExamenComponent;
  let fixture: ComponentFixture<DarExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
