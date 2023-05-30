import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenuExampleComponent } from './ngx-menu-example.component';

describe('NgxMenuExampleComponent', () => {
  let component: NgxMenuExampleComponent;
  let fixture: ComponentFixture<NgxMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMenuExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
