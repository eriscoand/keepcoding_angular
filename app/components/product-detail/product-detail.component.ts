import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { ConfirmationService } from "primeng/primeng";

import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
    templateUrl: "./app/components/product-detail/product-detail.component.html",
    styleUrls: ["./app/components/product-detail/product-detail.component.css"]
})
export class ProductDetailComponent implements OnDestroy, OnInit {

    private _product: Product;
    private _productSubscription: Subscription;

    userLike: boolean = false;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _confirmationService: ConfirmationService
        ) { }

    ngOnInit(): void {
        this._route.data.forEach((data: { product: Product }) => this._product = data.product);
        window.scrollTo(0, 0);

        // (Broken white path) Vamos a buscar al servicio si al usuario le gusta el producto!
        this.userLike = this._productService.isLike(this._product);
    }

    ngOnDestroy(): void {
        if (this._productSubscription !== undefined) {
            this._productSubscription.unsubscribe();
        }
    }

    private _buyProduct(): void {
        this._productSubscription = this._productService
                                        .buyProduct(this._product.id)
                                        .subscribe(() => this._showPurchaseConfirmation())
    }

    private _showPurchaseConfirmation(): void {
        this._confirmationService.confirm({
            rejectVisible: false,
            message: "Producto comprado. ¡Enhorabuena!",
            accept: () => this._router.navigate(["/product"])
        });
    }
    
    getImageSrc(): string {
        return this._product && this._product.photos.length > 0 ? this._product.photos[0] : "";
    }

    showPurchaseWarning(): void {
        this._confirmationService.confirm({
            message: `Vas a comprar ${this._product.name}. ¿Estás seguro?`,
            accept: () => this._buyProduct()
        });
    }

    goBack(): void {
        window.history.back();
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Broken White Path                                              |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
      Función que modifica el valor de userLike y persiste en 
      el servicio 

    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|*/

    changeLike(): void {
        this.userLike = !this.userLike;
        this._productService.setLike(this._product,this.userLike);
    }
}
