import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  parameterValue:string;
  constructor(private _router: Router, private _activationRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activationRoute.params.subscribe(parameter => {
      this.parameterValue = this._activationRoute.snapshot.paramMap.get('id')
    })
  }

}
