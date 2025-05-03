
// Interfaz base para todos los tipos de campos
export interface FormFieldBase {
    name: string;
    label: string;
    type: string;
    required: boolean;
    placeholder: string;
  }
  
  // Interfaz para campos de texto (text, email, number, etc.)
  export interface TextField extends FormFieldBase {
    type: 'text' | 'email' | 'number';
  }
  
  // Interfaz para las opciones de los campos select
  export interface SelectOption {
    label: string;
    value: string;
  }
  
  // Interfaz para campos select
  export interface SelectField extends FormFieldBase {
    type: 'select';
    options: SelectOption[];
  }
  
  // Tipo unión para representar cualquier tipo de campo
  export type FormField = TextField | SelectField;