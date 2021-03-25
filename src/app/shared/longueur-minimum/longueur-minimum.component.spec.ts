import { AbstractControl } from "@angular/forms";
import { ZonesValidator } from "./longueur-minimum.component";


describe('Zones Validator', ()=> {

    it('#7 | une chaîne avec 10 espaces est invalide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: '          '}
        let result = Validator(control as AbstractControl)
        expect(result['CaracInsuffisant']).toBe(true)
    
    });

    it('#8 | Une phrase avec des mots est valide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: 'Vive angular'}
        let result = Validator(control as AbstractControl)
        expect(result).toBe(null)
    
    });

    it('#9 | Une phrase avec 3 espaces, des mots et ensuite 3 espaces est validee', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: '   je le veux   '}
        let result = Validator(control as AbstractControl)
        expect(result).toBe(null)
    
    });

    it('#10 | Une phrase avec 1 espace et 2 caractères est invalide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: ' xx'}
        let result = Validator(control as AbstractControl)
        expect(result['CaracInsuffisant']).toBe(true)
    
    });

    it('#11 | Une phrase avec 2 espaces et 1 caractère est invalide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: '  x'}
        let result = Validator(control as AbstractControl)
        expect(result['CaracInsuffisant']).toBe(true)
    
    });

    it('#12 | Une phrase avec 3 espaces et 3 caractères est valide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: '   xxx'}
        let result = Validator(control as AbstractControl)
        expect(result).toBe(null)
    
    });

    it('#13 | Une phrase avec 5 espaces, 5 caractères et 5 espaces est valide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: '     xxxxx     '}
        let result = Validator(control as AbstractControl)
        expect(result).toBe(null)
    
    });

    it('#14 | Une chaîne nulle est invalide', () => {
        let Validator = ZonesValidator.longueurMin(3)
        let control = {value: null}
        let result = Validator(control as AbstractControl)
        expect(result['CaracInsuffisant']).toBe(true)
    
    });
});
