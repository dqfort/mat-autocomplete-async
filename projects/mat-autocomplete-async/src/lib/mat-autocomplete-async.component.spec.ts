import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteAsyncComponent } from './mat-autocomplete-async.component';

describe('MatAutocompleteAsyncComponent', () => {
  let component: MatAutocompleteAsyncComponent;
  let fixture: ComponentFixture<MatAutocompleteAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAutocompleteAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAutocompleteAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
