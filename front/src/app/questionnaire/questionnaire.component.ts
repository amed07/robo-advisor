import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from  '../navbar';
import { WebService } from '../webservices';
import { MaterialModule } from '@angular/material'

import { FormsModule, Validators, AbstractControl } from '@angular/forms';

import { MdDialog, MdDialogRef, MdSlider } from '@angular/material';

import 'hammerjs';

import {  
  FormBuilder,  
  FormGroup  
} from '@angular/forms';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [WebService, AuthenticationService]
})
export class QuestionnaireComponent{

  pageNumber = "1";

  public tolerances = [
      { value: '1', display: 'Conservative' },
      { value: '2', display: 'Moderate' },
      { value: '3', display: 'Aggresive' }
  ];

  myForm: FormGroup;
  age: AbstractControl;
  retireAge: AbstractControl;
  income: AbstractControl;
  yearsRetired: AbstractControl;
  incomeRetired: AbstractControl;
  rspSavings: AbstractControl;
  rspMonthlyContribution: AbstractControl;
  savings: AbstractControl;
  monthlyContribution: AbstractControl;
  riskTolerance: AbstractControl;
 
  constructor(fb: FormBuilder, private router: Router) {  
    this.myForm = fb.group({  
      'age':  ['30', Validators.required],
      'retireAge':  ['65', Validators.required],
      'income':  ['40000', Validators.required],
      'yearsRetired':  ['35', Validators.required],
      'incomeRetired':  ['20000', Validators.required],
      'rspSavings':  ['', Validators.required],
      'rspMonthlyContribution':  ['', Validators.required],
      'savings':  ['', Validators.required],
      'monthlyContribution':  ['', Validators.required],
      'riskTolerance':  [],

    }); 

    this.age = this.myForm.controls['age'];   
    this.retireAge = this.myForm.controls['retireAge']; 
    this.income = this.myForm.controls['income']; 
    this.yearsRetired = this.myForm.controls['yearsRetired'];
    this.incomeRetired = this.myForm.controls['incomeRetired'];
    this.rspSavings = this.myForm.controls['rspSavings'];
    this.rspMonthlyContribution = this.myForm.controls['rspMonthlyContribution'];
    this.savings = this.myForm.controls['savings'];
    this.monthlyContribution = this.myForm.controls['monthlyContribution'];
    this.riskTolerance = this.myForm.controls['riskTolerance'];

    // Invest to 100 years of age
    this.retireAge.valueChanges.subscribe(data => {
      this.yearsRetired.setValue(100-this.retireAge.value);
    });

    // Want at least half of your current yearly income
    this.income.valueChanges.subscribe(data => {
      this.incomeRetired.setValue(this.income.value / 2);
    });

  }


  onSubmit(form: any): void {  

    // On submit of the questionnaire, sumbmit to server.

    console.log('you submitted value:', form); 
    window.scrollTo(0, 0);
    this.router.navigate(['/home'])

  }
}