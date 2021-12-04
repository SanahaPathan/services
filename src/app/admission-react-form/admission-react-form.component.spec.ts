import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionReactFormComponent } from './admission-react-form.component';

describe('AdmissionReactFormComponent', () => {
  let component: AdmissionReactFormComponent;
  let fixture: ComponentFixture<AdmissionReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionReactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
