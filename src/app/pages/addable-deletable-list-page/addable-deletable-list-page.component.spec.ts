import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddableDeletableListPageComponent } from './addable-deletable-list-page.component';

describe('AddableDeletableListPageComponent', () => {
  let component: AddableDeletableListPageComponent;
  let fixture: ComponentFixture<AddableDeletableListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddableDeletableListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddableDeletableListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
