import { Injectable } from '@angular/core';
import { FormField } from '../../interfaces/form-config.models';
import { delay, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {}

   getFormConfig(): Observable<FormField[]>{

    const formConfig: FormField[] = [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your first name'
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your last name'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter your email'
      },
      {
        name: 'age',
        label: 'Age',
        type: 'number',
        required: false,
        placeholder: 'Enter your age'
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        required: false,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' }
        ],
        placeholder: 'Select your gender'
      },
      {
        name: 'reason',
        label: 'reason',
        type: 'password',
        required: false,
        placeholder: 'escribe tu razon'
      }
    ];

    return of(formConfig);

   }

   getFormFieldsFromJson(): Observable<FormField[]> {
    return this.http.get<FormField[]>('./assets/forms-fields.json').pipe(
      delay(Math.floor(Math.random() * 1000) + 500));
  }
}
