import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('#1 Zone Prénom invalide avec 2 caractères', () => { 
    let zone = component.problemeForm.controls['Prenom'];
    zone.setValue('q'.repeat(2));
    expect(zone.invalid).toBeTruthy();
    
  });

  it('#2 | Zone Prénom valide avec 3 caractères', () => { 
    let zone = component.problemeForm.controls['Prenom'];
    zone.setValue('w'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });

  it('#3 | Zone prénom valide avec 200 caractères', () => { 
    let zone = component.problemeForm.controls['Prenom'];
    zone.setValue('e'.repeat(200));
    expect(zone.valid).toBeTruthy();

  });

  it('#4 | Zone Prénom invalide avec aucune valeur', () => { 
    let zone = component.problemeForm.controls['Prenom'];
    zone.setValue('r'.repeat(0));
    expect(zone.invalid).toBeTruthy();
    
  });
    
  it('#5 | Zone Prénom invalide avec 10 espaces', () => {​​​​​​​​
  let zone = component.problemeForm.controls['Prenom'];
  zone.setValue('          ');
  expect(zone.invalid).toBe(true);
  }​​​​​​​​);

  it('#6 | Zone Prénom invalide avec 2 espaces et 1 caractère', () => {​​​​​​​​
    let zone = component.problemeForm.controls['Prenom'];
    zone.setValue('  '.repeat(2) + 't'.repeat(1));
    expect(zone.invalid).toBe(true);
    }​​​​​​​​);

});
