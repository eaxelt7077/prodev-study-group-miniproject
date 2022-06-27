import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddableDeletableListComponent } from './addable-deletable-list.component';

describe('AddableDeletableListComponent', () => {
  let component: AddableDeletableListComponent;
  let fixture: ComponentFixture<AddableDeletableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddableDeletableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddableDeletableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
