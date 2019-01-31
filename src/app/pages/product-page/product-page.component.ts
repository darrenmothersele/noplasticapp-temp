import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {AngularFireFunctions} from '@angular/fire/functions';
import {get} from 'lodash-es';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  barcode$;
  data$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fns: AngularFireFunctions
  ) { }

  ngOnInit() {
    const callable = this.fns.httpsCallable('checkProduct');
    this.barcode$ = this.route.paramMap.pipe(
      map((params) => params.get('barcode'))
    );
    this.data$ = this.barcode$.pipe(
      switchMap(barcode => callable({ barcode }))
    );
  }

  generateEmail(data) {
    const subject = encodeURIComponent(get(data, 'product[1]', 'Your product'));
    const body = encodeURIComponent(`I don't want to buy this product because of the plastic.`);
    const email = encodeURIComponent(data['manufacturer'][2]);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }
}
