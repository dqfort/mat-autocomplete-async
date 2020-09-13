# Mat-Autocomplete-Http

Mat-Autocomplete-Http is a library to make building an autocomplete with Angular Material easier.

## Quickstart

1. Install the library.
2. Create an observable arrays for looking filtered options.
3. Using a normal angular material autocomplete templete, but adding `matAutocompleteHttp` as attribule in `MatInput`

    ```html
    <mat-form-field>
    <input type="text"
            placeholder="Pick one"
            matInput
            [formControl]="myControl"
            [matAutocomplete]="auto"
            matAutocompleteHttp
            >
    <mat-autocomplete #auto="matAutocomplete"  autoActiveFirstOption="true">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option.id">
        {{option.name}}
        </mat-option>
    </mat-autocomplete>
    </mat-form-field>
    ```
