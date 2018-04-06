import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IBrand } from "../brands/brand";
import { IItem } from "../brands/item";
import { IColor } from "../brands/color";
import { ISize } from "../brands/size";
import { IFabric } from "../brands/fabric";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DataDescService {
    private _brandUrl = '../assets/brands.json';
    private _itemUrl = '../assets/items.json';
    private _colorUrl = '../assets/colors.json';
    private _sizeUrl  = '../assets/sizes.json';
    private _fabricUrl = '../assets/fabrics.json';

    constructor(private _http: HttpClient) { }

    getBrands(): Observable<IBrand[]> {
        return this._http.get<IBrand[]>(this._brandUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getItems(): Observable<IItem[]> {
        return this._http.get<IItem[]>(this._itemUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getColors(): Observable<IColor[]> {
        return this._http.get<IColor[]>(this._colorUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getSizes(): Observable<ISize[]> {
        return this._http.get<ISize[]>(this._sizeUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getFabrics(): Observable<IFabric[]> {
        return this._http.get<IFabric[]>(this._fabricUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
    
}