export interface ProductFilter {
    _sorting?: string;
    text?: string;
    category?: string;
    state?: string;
    stateSelling?: boolean;
    price_min?:string;
    price_max?:string;
}
