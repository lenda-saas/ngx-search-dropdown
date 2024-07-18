import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchDropdownComponent } from './ngx-search-dropdown.component';

describe('NgxSearchDropdownComponent', () => {
  let component: NgxSearchDropdownComponent;
  let fixture: ComponentFixture<NgxSearchDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSearchDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSearchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
