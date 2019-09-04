import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from './product';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
dataSource : MatTableDataSource<Products>;
displayedColumns=['pro_name','pro_desc','pro_qty','pro_mfg','pro_price'];

  constructor(private _data:ProductService) { }

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (x: Products[]) => {
        this.dataSource = new MatTableDataSource(x);
      }
    );
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
