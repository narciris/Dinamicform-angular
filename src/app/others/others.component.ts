import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { FormField, SelectField } from '../../interfaces/form-config.models';

@Component({
  selector: 'app-others',
  standalone: false,
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent implements OnInit {
  formFields: FormField[] = [];
  dynamicForm!: FormGroup;
  isLoading = true;
  submitted = false;

  public constructor(private fb: FormBuilder, private service : FormService){
    
    this.dynamicForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.service.getFormFieldsFromJson().subscribe({
      next: (config) => {
        this.formFields = config;
        this.createForm();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar los campos del formulario', error);
        this.isLoading = false;
      }
    });
  }

  createForm():void{
    const formControls: { [key: string]: any } = {};

    this.formFields.forEach(field =>
       {
      const validators = field.required ? [Validators.required] : [];
      if(field.type === 'email'){
        validators.push(Validators.email)
      }
      formControls[field.name] = ['', validators];

    });

    this.dynamicForm = this.fb.group(formControls);
  }


  isSelectField(field: FormField): field is SelectField {
    return field.type === 'select';
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.dynamicForm.invalid) {
      return;
    }
  }
  get f() {
    return this.dynamicForm.controls;
  }

}
