import {Pipe, PipeTransform} from '@angular/core';

import { Product } from "../models/product";

@Pipe({
 name: 'isState'
})
export class StateProductPipe{

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Red Wine Path                                                  |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
      Filtro por estado

    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|*/

    transform(products: Product[], state: string){

        if (!state){
            return products;
        } 

        return products.filter(product => {
            //esta en rango
            if(product.state === state){
                return true;
            }else{
                return false;
            }

        });

    }

}