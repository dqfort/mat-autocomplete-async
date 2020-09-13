import { Directive } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matAutocompleteAsync]'
})
export class MatAutocompleteAsyncDirective {
  selectedOptionViewValue: string;
  last_value: any;

  constructor(private autoTrigger: MatAutocompleteTrigger, private host: MatInput) {}

  ngAfterViewInit(): void {
    let autocomplete = this.autoTrigger.autocomplete;
    autocomplete.displayWith = _ => { return this.selectedOptionViewValue };

    autocomplete.optionSelected.subscribe((e: MatAutocompleteSelectedEvent) => {
      this.selectedOptionViewValue = e.option.viewValue;
      this.autoTrigger.writeValue(e.option.value);
      this.last_value = e.option.value;
    });

    if (this.host.ngControl) {
      let fc = this.host.ngControl.control;

      this.autoTrigger.panelClosingActions.subscribe( _ => {
        if (this.autoTrigger.activeOption)
        {
          this.selectedOptionViewValue = this.autoTrigger.activeOption.viewValue;
          fc.setValue(this.autoTrigger.activeOption.value);
          this.last_value = this.autoTrigger.activeOption.value;
        }
        else {
          // Clear text box and form control if not found in the options
          if (fc.value != this.last_value) {
            this.selectedOptionViewValue = '';
            fc.setValue('');
          }
        }
      });
    }
  }
}
