import {Pipe, PipeTransform} from '@angular/core';

import { Product } from "../models/product";

@Pipe({
 name: 'orderProductsBy'
})
export class OrderProductsPipe{

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Red Wine Path                                                  |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
      Ordenación por texto o por número, pasando el parámetro

    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|*/


    transform(products: Product[], orderBy: any, sorting = "asc"){

        if (!orderBy || orderBy.trim() == ""){
            return products;
        } 

        let temp: Product[] = [];

        //ordenación ascendente
        if (sorting === "asc"){
            temp = products.sort((item1: any, item2: any) => { 
                let a = item1[orderBy];
                let b = item2[orderBy];
                return this.orderByComparator(a, b);
            });
        }else{
        //ordenación descendente
            temp = products.sort((item1: any, item2: any) => { 
                let a = item1[orderBy];
                let b = item2[orderBy]; 
                return this.orderByComparator(b, a);
            });
        }

        return temp;

    }

    orderByComparator(a:any, b:any):number{

        if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
        //Si es un texto
            if(a.toLowerCase() < b.toLowerCase()) return -1;
            if(a.toLowerCase() > b.toLowerCase()) return 1;
        }else{
        //Si es un numbero
            if(parseFloat(a) < parseFloat(b)) return -1;
            if(parseFloat(a) > parseFloat(b)) return 1;
        }

        return 0; 
    }
}