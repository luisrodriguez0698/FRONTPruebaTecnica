import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { MatDialog } from '@angular/material/dialog';
import { formFields } from 'src/app/validator/formValidator.validator';
import { PopUpAlertComponent } from '../popUp/pop-up-alert/pop-up-alert.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  minDate: Date;
  constructor(private _formBuilder: FormBuilder, private _apiServices: ApiServicesService, public dialog: MatDialog) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100,0,1);
    
  }
  
  public formulario: FormGroup = this._formBuilder.group(formFields);
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined = new Observable<string[]>();

  ngOnInit() {
    this.getEstados();
    this.filteredOptions = this.formulario.get("city")?.valueChanges.pipe(
      startWith(''),
      map((value:any) => this._filter(value || '')),
    );
    
  }

  public getEstados():void{ 
    this._apiServices.getEstados().subscribe(response => {
      console.log(response);
  
      this.options = response.map(m => m.nombre);
      console.log(this.options);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

 
  public enviarNotificacion(): void{
    if(this.formulario.valid){
      console.log("joel")
      this._apiServices.enviarNotificacion(this.formulario.value).subscribe(response => {
        console.log(response);
      });
    }else{
      console.log("zaid")
      this.formulario.markAllAsTouched();
      this.openPopUp();

    }
  }

  openPopUp() {
    this.dialog.open(PopUpAlertComponent, {
      data: this.formulario.value,
    });
  }


}

