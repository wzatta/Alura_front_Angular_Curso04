import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {


  static equalTo(OtherField:string):ValidatorFn {
    return(control:AbstractControl):ValidationErrors | null => {
      const fieldValue = control.value
      const otherFieldValue = control.root.get(OtherField)?.value

      if(fieldValue !== otherFieldValue ){
        return { equalTo: true}
      }

      return null;
    }
  }

}
