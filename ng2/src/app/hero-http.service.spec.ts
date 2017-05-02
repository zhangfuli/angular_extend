/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroHttpService } from './hero-http.service';

describe('HeroHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroHttpService]
    });
  });

  it('should ...', inject([HeroHttpService], (service: HeroHttpService) => {
    expect(service).toBeTruthy();
  }));
});
