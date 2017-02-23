import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from  '../navbar';
import { WebService } from '../webservices';

import { FormsModule, Validators, AbstractControl, FormBuilder,  
  FormGroup } from '@angular/forms';

import { MdDialog, MdDialogRef, MdSlider } from '@angular/material';

import 'hammerjs';

@Component({
  selector: 'addGoals',
  templateUrl: './addGoals.component.html',
  styleUrls: ['./addGoals.component.css'],
  providers: [WebService, AuthenticationService]
})
export class AddGoalsComponent implements OnInit {




  selectedGoal: string;
  selectedImportance: string;

  goals = [
    {value: 'Retirement', viewValue: 'Retirement'},
    {value: 'Buying a home', viewValue: 'Buying a home'},
    {value: 'Buying a car', viewValue: 'Buying a car'},
    {value: 'Other', viewValue: 'Other...'},
  ];

  scales = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
  ];

  goalForm: FormGroup;
  goalType: AbstractControl;
  targetAmount: AbstractControl;
  numYears: AbstractControl;
  numMonths: AbstractControl;

  constructor(private http: Http, private router: Router,
    private webservice: WebService, public dialog: MdDialog, fb: FormBuilder) {

      this.goalForm = fb.group({  
      'goalType':  [],
      'targetAmount':  ['', Validators.required],
      'numYears':  ['', Validators.required],
      'numMonths':  ['', Validators.required],
    }); 

    this.goalType = this.goalForm.controls['goalType']; 
    this.targetAmount = this.goalForm.controls['targetAmount']; 
    this.numYears = this.goalForm.controls['numYears']; 
    this.numMonths = this.goalForm.controls['numMonths']; 

    // To change based on user settings
    this.goalType.valueChanges.subscribe(data => {
       if(this.goalType.value === "Retirement"){
         this.targetAmount.setValue(1000000);
         this.numYears.setValue(30);
         this.numMonths.setValue(0);
       }
       else if(this.goalType.value === "Buying a home"){
         this.targetAmount.setValue(200000);
         this.numYears.setValue(5);
         this.numMonths.setValue(6);
       }
       else if(this.goalType.value === "Buying a car"){
         this.targetAmount.setValue(10000);
         this.numYears.setValue(1);
         this.numMonths.setValue(3);
       }
    });

  }

  onSubmit(form: any): void {  

    // On submit of the questionnaire, sumbmit to server.

    console.log('you submitted value:', form); 
    window.scrollTo(0, 0);

  }

  ngOnInit() {
    this.webservice.isAuthenticated();
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
  }

  public clear() {

  }

  /**
   * Fetch the data from the python-flask backend
   */
  public getData() {
    this.webservice.getDataFromBackend()
      .subscribe(
      data => this.handleData(data),
      err => this.logError(err),
      () => console.log('got data')
      );
  }
  private handleData(data: Response) {
    if (data.status === 200) {
      let receivedData = data.json();
    }
    console.log(data.json());
  }


  private logError(err: Response) {
    console.log('There was an error: ' + err.status);
    if (err.status === 0) {
      console.error('Seems server is down');
    }
    if (err.status === 401) {
      this.router.navigate(['/sessionexpired']);
    }
  }
}

export class Goal {
  constructor(
    public name: string,
    public amount: number,
    public years: number,
    public months: number,
    public importance: number
  ) {  }
}