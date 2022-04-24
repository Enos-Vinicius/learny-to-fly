import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTrailComponent } from './people-trail.component';

describe('PeopleTrailComponent', () => {
  let component: PeopleTrailComponent;
  let fixture: ComponentFixture<PeopleTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criado component People Trail', () => {
    expect(component).toBeTruthy();
  });
});
