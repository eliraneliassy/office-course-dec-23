import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // { provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true },
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';

  @Input() disabled = false;

  @Input() isPassword = false;

  @ViewChild('input') input?: ElementRef<any>;

  ngControl = inject(NgControl);

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  userInput(value: string) {

  }

  onTouched(blurEvent: Event) {

  }

  writeValue(obj: any): void {
    if(this.input) {
      this.input.nativeElement.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.userInput = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
