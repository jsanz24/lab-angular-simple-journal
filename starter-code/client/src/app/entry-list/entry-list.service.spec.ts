import { TestBed } from '@angular/core/testing';

import { EntryListService } from './entry-list.service';

describe('EntryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryListService = TestBed.get(EntryListService);
    expect(service).toBeTruthy();
  });
});
