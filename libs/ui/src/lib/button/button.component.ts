import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';


@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text = '';

  @Input() bgColor = 'aqua';

  @Output() clicked = new EventEmitter<void>();

  clickHandler() {
    this.clicked.emit();
  }
}
