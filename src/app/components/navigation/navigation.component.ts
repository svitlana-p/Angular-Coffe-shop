import { Component, Input } from '@angular/core';

type NavTextColor = 'text-white' | null;
type NavPosition = 'justify-center' | null;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() position!: NavPosition;
  @Input() color!: NavTextColor;
  @Input() img!: string;
  @Input() marg?: string;

  public getClassName(): string {
    return `flex  items-center cursor-pointer mt-6  ${this.color} text-sm ${this.position} ${this.marg}`
  }
}
