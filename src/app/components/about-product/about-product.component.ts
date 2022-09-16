import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent {
  @Input() prodName!: string;
  @Input() prodImg!: string;
}
