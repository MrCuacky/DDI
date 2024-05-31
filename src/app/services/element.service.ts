import { Injectable } from "@angular/core";
import { PeriodicElement } from "../models/element";

@Injectable({
    providedIn: 'root'
  })
  export class elementService {
  
    private heroesUrl = 'api/heroes'
    data: PeriodicElement [] = [
        {position: 1, name: 'Hidrogeno', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helio', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Litio', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Berilio', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boro', weight: 10.81, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.01, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.01, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'}
    ]
    constructor() { }
  }
  