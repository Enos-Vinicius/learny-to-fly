import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsComponent } from './awards.component';

describe('AwardsComponent', () => {
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criado component Awards', () => {
    expect(component).toBeTruthy();
  });
});
