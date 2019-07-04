import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkFormComponent } from './sdk-form.component';

describe('SdkFormComponent', () => {
  let component: SdkFormComponent;
  let fixture: ComponentFixture<SdkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
