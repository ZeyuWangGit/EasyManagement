import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks=[
      new Stock(1, "first stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(2, "second stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(3, "third stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(4, "fouth stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(5, "fifth stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(6, "sixth stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(7, "seventh stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
      new Stock(8, "eighth stcock", 1.99, 3.5,"AAA",["a", "b", "c"]),
    ]
  }

}

export class Stock {
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
