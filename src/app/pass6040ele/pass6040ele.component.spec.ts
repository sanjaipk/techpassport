import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pass6040eleComponent } from './pass6040ele.component';

describe('Pass6040eleComponent', () => {
  let component: Pass6040eleComponent;
  let fixture: ComponentFixture<Pass6040eleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pass6040eleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pass6040eleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
