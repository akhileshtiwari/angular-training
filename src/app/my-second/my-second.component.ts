import { Component, OnInit } from '@angular/core';

import { of } from "rxjs";

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.less']
})
export class MySecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const values = ['akhlesh','vijay','rohit', 'selvaraj', 'Roushan'];

    const $valOb = of(values).pipe(
      map(name => 'Mr.' + name)
    );

    $valOb.subscribe(
      val=>{
        console.log(val);
      }
    );

    $valOb.subscribe(
      val=>{
        console.log(val);
      }
    );

    const p = new Promise(()=>{
      return values;
    });

    p.then(val=>{
      console.log(val);
    });

    p.then(val=>{
      console.log(val);
    });

  }

}
