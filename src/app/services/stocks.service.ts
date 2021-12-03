import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from 'src/model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  proxy = environment.gateway + "/stock";
  
  constructor(private httpClient: HttpClient) { }
    getStockList(): Observable<Stock[]>{
      return this.httpClient.get<Stock[]>(this.proxy + '/retrieve-all-stocks')
    }

    createStock(account:Object): Observable<Object> {
      return this.httpClient.post(this.proxy + '/add-stock/', account);
    }

    getStock(id: number): Observable<any> {
      return this.httpClient.get(this.proxy + '/retrieve-stock/' + id);
    }
  
}