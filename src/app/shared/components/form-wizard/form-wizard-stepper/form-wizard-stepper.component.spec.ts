import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWizardStepperComponent } from './form-wizard-stepper.component';

describe('FormWizardStepperComponent', () => {
  let component: FormWizardStepperComponent;
  let fixture: ComponentFixture<FormWizardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWizardStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWizardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
