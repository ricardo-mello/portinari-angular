import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';

import { PoChartCircular } from '../po-chart-circular/po-chart-circular';

@Component({
  selector: 'po-chart-gauge',
  templateUrl: '../po-chart-dynamic-type.component.html'
})
export class PoChartGaugeComponent extends PoChartCircular {

  constructor(el: ElementRef, ngZone: NgZone, renderer: Renderer2) {
    super(el, ngZone, renderer);
  }

}
