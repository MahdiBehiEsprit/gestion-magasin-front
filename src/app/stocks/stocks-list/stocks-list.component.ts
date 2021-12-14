import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {
  

  stockList !: Stock[];
  warnstockList !: Stock[];

  constructor(private stocksService : StocksService,private router : Router) { }

  ngOnInit(): void {
    this.stocksService.getStockList().subscribe((data)=>{
      this.stockList = data;
    })

    this.stocksService.getStockWarn().subscribe((data)=>{
      this.warnstockList = data;
    })
  }

  updateStock(id: number) {
    this.router.navigate(['stocks/edits', id]);
  }

  deleteStock(id: number) {
    if (confirm('Are you sure to delete this product ?')) {
      this.stocksService.deleteStock(id)
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
    }
  }

}
