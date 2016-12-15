import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";

import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

import { Product } from "../../models/product";
import { ProductFilter } from "../../models/product-filter";
import { ProductService } from "../../services/product.service";

import { Router } from "@angular/router";

@Component({
    selector: "user-profile",
    templateUrl: "./app/components/user-profile/user-profile.component.html",
    styleUrls: ["./app/components/user-profile/user-profile.component.css"]
})
export class UserProfileComponent implements OnInit,OnChanges, OnDestroy {

    @Input() userId: number;
    user: User;
    private _userSubscription: Subscription;
    private _products: Product[];
    private _filterStream$: Subject<ProductFilter> = new Subject;

    constructor(private _router: Router,
                private _userService: UserService,
                private _productService: ProductService) { }

    ngOnInit(): void {
        this._filterStream$
            .switchMap(() => {
                let filter: ProductFilter = {};
                filter.sellerId = this.userId.toString();
                return this._productService.getProducts(filter);

            })
            .subscribe((products: Product[]) => this._products = products);
        this.filterCollection(null);
    }

    filterCollection(filter: ProductFilter): void {
        this._filterStream$.next(filter);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["userId"] && changes["userId"]["currentValue"]) {
            this._userSubscription = this._userService
                                         .getUser(this.userId)
                                         .subscribe(data => this.user = data);
        }
    }

    ngOnDestroy(): void {
        if (this._userSubscription) {
            this._userSubscription.unsubscribe();
        }
    }

    getImageSrc(): string {
        return this.user ? this.user.avatar : "";
    }

    selectedProduct(product: Product): void{
        this._router.navigate(["/products", product.id])
    }

}
