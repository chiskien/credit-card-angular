import {FormControl} from "@angular/forms";

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if(!value) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }
    if(value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
    }
    if (value.length === 2) {
      super.setValue(value + '/', {...options, emitModelToViewChange: true});
      return;
    }
    super.setValue(value,{...options, emitModelToViewChange: true });
  }
}

