import { TestBed } from '@angular/core/testing';

import { MatAutocompleteAsyncService } from './mat-autocomplete-async.service';

describe('MatAutocompleteAsyncService', () => {
  let service: MatAutocompleteAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatAutocompleteAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
