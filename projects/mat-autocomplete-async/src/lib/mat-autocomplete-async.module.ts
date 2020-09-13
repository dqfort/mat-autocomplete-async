import { NgModule } from '@angular/core';
import { MatAutocompleteAsyncComponent } from './mat-autocomplete-async.component';
import { MatAutocompleteAsyncDirective } from './mat-autocomplete-async.directive';



@NgModule({
  declarations: [MatAutocompleteAsyncComponent, MatAutocompleteAsyncDirective],
  imports: [
  ],
  exports: [MatAutocompleteAsyncComponent]
})
export class MatAutocompleteAsyncModule { }
