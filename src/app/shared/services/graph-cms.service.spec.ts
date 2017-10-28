import { TestBed, inject } from '@angular/core/testing';

import { GraphCmsService } from './graph-cms.service';

describe('GraphCmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphCmsService]
    });
  });

  it('should be created', inject([GraphCmsService], (service: GraphCmsService) => {
    expect(service).toBeTruthy();
  }));
});
