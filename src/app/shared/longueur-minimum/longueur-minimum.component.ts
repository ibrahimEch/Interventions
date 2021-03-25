import { AbstractControl, ValidatorFn } from "@angular/forms";

export class ZonesValidator {
    static longueurMin(longueur : number): ValidatorFn {
        return(valeurControle: AbstractControl): {[key: string]: boolean} | null => {
            if(valeurControle.value == null){
                return {'CaracInsuffisant': true};
            }
            if(valeurControle.value.trim().length >= longueur) {

                return null;
            }
        return {'CaracInsuffisant': true};
        };
    }

}