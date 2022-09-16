import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  name = 'Angular';
  readioSelected:any;
  //showconten:"" | undefined;
  showcontent: any;
  showContent(){
    this.showcontent=this.readioSelected;
  }

  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  }


