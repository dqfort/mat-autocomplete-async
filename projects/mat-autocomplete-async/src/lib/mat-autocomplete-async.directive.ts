import { Directive, HostListener } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matAutocompleteAsync]'
})
export class MatAutocompleteAsyncDirective {
  selectedOptionViewValue: string;
  initial_value: any;

  constructor(private autoTrigger: MatAutocompleteTrigger, private host: MatInput) {}

  @HostListener('focus') onfocus() {
    this.initial_value = this.host.value;
  }

  ngAfterViewInit(): void {
    let autocomplete = this.autoTrigger.autocomplete;
    autocomplete.displayWith = _ => { return this.selectedOptionViewValue };

    autocomplete.optionSelected.subscribe((e: MatAutocompleteSelectedEvent) => {
      this.selectedOptionViewValue = e.option.viewValue;
      this.autoTrigger.writeValue(e.option.value);
    });

    this.autoTrigger.panelClosingActions.subscribe( _ => {
      if (this.autoTrigger.activeOption)
      {
        this.selectedOptionViewValue = this.autoTrigger.activeOption.viewValue;
        this.autoTrigger.writeValue(this.autoTrigger.activeOption.value);
        this.autoTrigger._onChange(this.autoTrigger.activeOption.value);
      }
      else {
        // Clear text box and form control if not found in the options
        if (this.host.value != this.initial_value ) {
          this.selectedOptionViewValue = '';
          this.autoTrigger.writeValue('');
          this.autoTrigger._onChange('');
        }
      }
    });
  }
}
