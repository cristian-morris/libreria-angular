import { TestBed } from '@angular/core/testing';

import { NgxMenuExampleService } from './ngx-menu-example.service';

describe('NgxMenuExampleService', () => {
  let service: NgxMenuExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMenuExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
