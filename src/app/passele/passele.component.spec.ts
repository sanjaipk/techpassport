import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseleComponent } from './passele.component';

describe('PasseleComponent', () => {
  let component: PasseleComponent;
  let fixture: ComponentFixture<PasseleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasseleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
