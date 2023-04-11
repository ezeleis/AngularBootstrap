import { Component, ViewChild, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('exampleModal') exampleModal!: ElementRef;

  onSubmit() {
    const modal = new bootstrap.Modal(this.exampleModal.nativeElement);
    modal.show();

    const formValues: {[key: string]: string | number} = {
      nomeAssinatura: '',
      cargaHoraria: 0,
      escola: '',
      profesor: '',
      opcional: ''
    };
    for (const key in formValues) {
      if (Object.prototype.hasOwnProperty.call(formValues, key)) {
        console.log(`${key}: ${formValues[key]}`);
      }
    }
  }

}
