import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmdReferencementComponent } from './dmd-referencement.component';

describe('DmdReferencementComponent', () => {
  let component: DmdReferencementComponent;
  let fixture: ComponentFixture<DmdReferencementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmdReferencementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmdReferencementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
