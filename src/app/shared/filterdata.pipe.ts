import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"filterData"})
export class FilterPipe implements PipeTransform{

    transform(input:any[], searchvar:string, col:string){
        if (searchvar == undefined || col == undefined)
        {
            return input;
        }else if (searchvar != ""){
            return input.filter(e => e[col].indexOf(searchvar)>-1)
        }
        return input;
    }

}