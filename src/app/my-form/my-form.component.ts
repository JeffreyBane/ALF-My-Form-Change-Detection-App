import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  myName: FormControl;
  active: FormControl;
  department: FormControl;
  notes: FormControl;

  myFormGroup: FormGroup;

  initialFormValue = '';


  constructor() { }

  ngOnInit(): void {




    this.myName = new FormControl('', Validators.required);
    this.active = new FormControl('');
    this.department = new FormControl('');
    this.notes = new FormControl('');

    this.myFormGroup = new FormGroup({
      myName: this.myName,
      active: this.active,
      department: this.department,
      notes: this.notes
    })

    const myNameFromDb: string = null;
    const activeFromDb: boolean = null;
    const departmentFromDb: string  = null;
    const notesFromDb: string = null;
   
    this.myFormGroup.controls.myName.setValue(myNameFromDb === null ? '' : myNameFromDb);
    this.myFormGroup.controls.active.setValue(activeFromDb === null ? false : activeFromDb);
    this.myFormGroup.controls.department.setValue(departmentFromDb === null ? '' : departmentFromDb);
    this.myFormGroup.controls.notes.setValue(notesFromDb === null ? '' : notesFromDb);

    this.initialFormValue = JSON.stringify(this.myFormGroup.value);
    console.log(this.initialFormValue);

  }

  saveForm(): void {
    if (this.myFormGroup.valid) {
    this.initialFormValue = JSON.stringify(this.myFormGroup.value);
    alert('Saved!');
    } else
    { 
      alert('Form is not valid! (enter a name)');
    }
  }

  tryToLeavePage(): void {

    console.log('Initial Form: ' + this.initialFormValue);
    console.log('Current Form: ' + JSON.stringify(this.myFormGroup.value));

    if (this.initialFormValue === JSON.stringify(this.myFormGroup.value)) {
      alert('Leaving page!');
    } else {
      alert('Form has changed, can\'t let you leave!!');
    }
  }

}



