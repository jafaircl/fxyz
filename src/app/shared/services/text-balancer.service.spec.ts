import { TestBed, inject } from '@angular/core/testing';

import { TextBalancerService } from './text-balancer.service';

describe('TextBalancerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextBalancerService]
    });
  });

  it('should be created', inject([TextBalancerService], (service: TextBalancerService) => {
    expect(service).toBeTruthy();
  }));
});
