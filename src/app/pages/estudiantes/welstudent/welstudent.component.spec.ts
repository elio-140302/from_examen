import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelstudentComponent } from './welstudent.component';

describe('WelstudentComponent', () => {
  let component: WelstudentComponent;
  let fixture: ComponentFixture<WelstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
