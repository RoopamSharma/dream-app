import {Directive,Renderer,ElementRef} from '@angular/core';
@Directive({
    selector: '[cc]'
})
export class ColorChanger{
    constructor(ef ElementRef,ren:Renderer){
        ren.setElementStyle(ef.nativeElement,'backgroundColor','pink');
    }
}