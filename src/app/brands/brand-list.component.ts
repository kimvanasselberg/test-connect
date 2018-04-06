import { Component } from '@angular/core';
import { DataDescService } from '../shared/data-desc.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IBrand } from './brand';
import { IItem } from './item';
import { IColor } from './color';
import { ISize } from './size';
import { IFabric } from './fabric';

@Component({
    selector: 'pm-brands',
    templateUrl: './brand-list.component.html'
})


export class BrandListComponent implements OnInit{
    pageTitle: string = 'Description Builder';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    selectedBrand: string;
    selectedItem: string;
    selectedColor: string;
    selectedSize: string;
    selectedFabric: string;
    selectedBustSize: string;
    selectedWaistSize: string;
    selectedHipsSize: string;
    selectedInseam: string;
    selectedTotalLengthSize: string;

    brands: IBrand[];
    items: IItem[];
    colors: IColor[];
    sizes: ISize[];
    fabrics: IFabric[];

    numbers: number[];
    numbers30: number[];
    numbers20: number[];
    numbers40: number[];


    constructor( private _dataDescService: DataDescService) {
        this.numbers20 = Array(21).fill(0).map((x,i)=>i+20);
        this.numbers30 = Array(21).fill(0).map((x,i)=>i+30);
        this.numbers40 = Array(40).fill(0).map((x,i)=>i+1);
    }

    selected(value: any) {

    }

    ngOnInit(): void {
        this._dataDescService.getBrands()
            .subscribe(brands => this.brands = brands,
                error => this.errorMessage = <any>error);

        this._dataDescService.getItems()
            .subscribe(items => this.items = items,
                error => this.errorMessage = <any>error);

        this._dataDescService.getColors()
            .subscribe(colors => this.colors = colors,
                error => this.errorMessage = <any>error);
        
        this._dataDescService.getSizes()
            .subscribe(sizes => this.sizes = sizes,
                error => this.errorMessage = <any>error);

        this._dataDescService.getFabrics()
            .subscribe(fabrics => this.fabrics = fabrics,
                 error => this.errorMessage = <any>error);

    }


    private newMethod() {
        return this.brands;
    }
}
