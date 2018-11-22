import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  barcode$;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.barcode$ = this.route.paramMap.pipe(
      map((params) => params.get('barcode'))
    );
  }

}
