import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ButtonComponent, InputComponent } from '@office/ui';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
}
