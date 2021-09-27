import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pass100eleComponent } from './pass100ele.component';

describe('Pass100eleComponent', () => {
  let component: Pass100eleComponent;
  let fixture: ComponentFixture<Pass100eleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pass100eleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pass100eleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
