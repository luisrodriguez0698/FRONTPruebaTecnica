import { Validators } from '@angular/forms';

export const formFields = {

    'name': ['',{validators: [Validators.required], updateOn: 'change'}],
    'email': ['', {validators: [Validators.required, Validators.email], updateOn: 'change'}],
    'phone': ['', {validators: [Validators.required], updateOn: 'change'}],
    'date': ['', {validators: [Validators.required], updateOn: 'change'}], 
    'cityState': ['', {validators: [Validators.required], updateOn: 'blur'}],

}