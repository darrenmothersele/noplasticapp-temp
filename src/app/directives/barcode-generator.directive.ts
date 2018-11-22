import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

import { BrowserQRCodeSvgWriter } from '@zxing/library';

@Directive({
  selector: '[appBarcodeGenerator]'
})
export class BarcodeGeneratorDirective implements AfterViewInit {

  @Input() appBarcodeGenerator;

  constructor(
    private readonly el: ElementRef
  ) { }

  ngAfterViewInit() {
    const codeWriter = new BrowserQRCodeSvgWriter(this.el.nativeElement);
    const svgElement = codeWriter.write(this.appBarcodeGenerator, 300, 300);
  }
}
