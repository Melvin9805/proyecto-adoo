import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  registerForm!: FormGroup;
  showContent() {
    throw new Error('Method not implemented.');
    }
  submitted = true;
  auxselect = false;

  radioAuxSelect(x:any){
    this.auxselect = (x===2);
  }

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    
      fecha: ["",Validators.required],
      lugar: ["",Validators.required],
      // Seccion 1. Datos del solicitante
      nombres1: ["",Validators.required],
      primerapellido1: ["",Validators.required],
      segundoapellido1: ["",Validators.required],
      parentesco1: ["",Validators.required],
      telefonomovil1: ["",Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*$")
    ])],
      telefonofijo1: ["",Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*$")
    ])],
      email1: [""  , Validators.email],
      otrosdatos1: ["",],
      //Seccion 2. Tipo y datos de la victima
      tipo: ["",Validators.required],
      nombre: ["",Validators.required],
      p_apellido: ["",Validators.required],
      s_apellido: ["",Validators.required],
      f_nacimiento: ["",],
      sexo: ["",Validators.required],
      nacionalidad: ["",Validators.required],
      curp: ["",],
      lugar_nacimiento: ["",],
      estado_civil: ["",Validators.required],
      calle: ["",],
      n_ext: ["",],
      n_int: ["", ],
      cp: ["",],
      colonia: ["",],
      localidad: ["",],
      delegacion: ["",],
      entidad_fed: ["",],
      telefono: ["", Validators.maxLength(10)],
      info_compl: ["",],
       //Seccion 3, relacion de la victima indirecta con la directa
      relacion_victima: this.formBuilder.array([]),
      //Seccion 4. Identificación de la victima
      identificacion: ["",Validators.required],
      tipoiden: ["",],
      no_documento:["",],
      //Seccion 5. Lugar y fecha de los hechos
      calle_h: ["",Validators.required],
      n_ext_h: ["",Validators.required],
      n_int_h: ["",Validators.required],
      cp_h: ["",Validators.required],
      colonia_h: ["",Validators.required],
      localidad_h: ["",Validators.required],
      delegacion_h: ["",Validators.required],
      entidadF_h: ["",Validators.required],
      fecha_h: ["",Validators.required],
      datosComp_h: ["",],
      relato_h: ["",Validators.required]
      
    });
  }  

  get form(){
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
