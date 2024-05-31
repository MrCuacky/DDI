import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hidrogeno', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helio', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Litio', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Berilio', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boro', weight: 10.81, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.01, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.01, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
