import { TestBed } from '@angular/core/testing';

import { NgxSearchDropdownService } from './ngx-search-dropdown.service';

describe('NgxSearchDropdownService', () => {
  let service: NgxSearchDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSearchDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
