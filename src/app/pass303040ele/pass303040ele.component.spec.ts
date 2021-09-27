import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pass303040eleComponent } from './pass303040ele.component';

describe('Pass303040eleComponent', () => {
  let component: Pass303040eleComponent;
  let fixture: ComponentFixture<Pass303040eleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pass303040eleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pass303040eleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
