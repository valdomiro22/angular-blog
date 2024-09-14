import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navegar',
  templateUrl: './navegar.component.html',
  styleUrl: './navegar.component.scss'
})
export class NavegarComponent {
  @Input() runFor: string = '';
  @Input() label: string = '';
}
