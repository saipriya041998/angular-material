import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MainTableDataSource, MainTableItem } from './main-table-datasource';
import { DisplaydemoService } from '../displaydemo.service';
import { User } from './displaydemo';
import { AnimationStyleMetadata } from '@angular/animations';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements  OnInit {

  dataSource : User[] = [];
  constructor(private _data: DisplaydemoService){}
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MainTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['user_name', 'user_email','user_mobile_no','user_password'];

  ngOnInit() {

      this._data.getAllUsers().subscribe(
      (x: User[]) => {
        this. dataSource = x;

      }
    );


    }
    applyFilter(filterValue: any) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }



  }



















//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//     this.table.dataSource = this.dataSource;
//   }
//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
// }

