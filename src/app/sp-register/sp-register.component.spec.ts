import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpRegisterComponent } from './sp-register.component';

describe('SpRegisterComponent', () => {
  let component: SpRegisterComponent;
  let fixture: ComponentFixture<SpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
