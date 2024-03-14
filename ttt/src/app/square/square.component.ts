import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {
   @Input() value : 'X' | 'O' = 'X';
}
