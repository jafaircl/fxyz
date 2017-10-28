import { TestBed, inject } from '@angular/core/testing';

import { MetaTagService } from './meta-tag.service';

describe('MetaTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaTagService]
    });
  });

  it('should be created', inject([MetaTagService], (service: MetaTagService) => {
    expect(service).toBeTruthy();
  }));
});
