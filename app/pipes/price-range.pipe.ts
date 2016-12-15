import {Pipe, PipeTransform} from '@angular/core';

import { Product } from "../models/product";

@Pipe({
 name: 'priceRange'
})
export class PriceRangePipe{

    transform(products: Product[], price1: number, price2: number){

        if (!price1 || !price2){
            return products;
        } 

        //Estados incorrectos
        if(price2 === 0 || price1 > price2){
            return products;
        }

        return products.filter(product => {
            //esta en rango
            if(product.price >= price1 && product.price <= price2){
                return true;
            }else{
                return false;
            }

        });

    }

}