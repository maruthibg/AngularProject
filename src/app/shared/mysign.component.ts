import { Component, Input, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms"


@Component({
    selector: "my-sign",
    template: `<h3>{{ title }}</h3>
    <form novalidate [formGroup]="myForm">
        UserName : <input type="text" placeholder="Enter User Name" formControlName="mname" required> 
        <b style="color:red" *ngIf="myForm.controls.mname.invalid && myForm.controls.mname.dirty">
            User Name is Required
        </b><br>
        Password : <input type="text" placeholder="Enter Password" formControlName="mpwd" required>
        <b style="color:red" *ngIf="myForm.controls.mpwd.invalid && myForm.controls.mpwd.dirty">
            <span *ngIf="myForm.controls.mpwd.errors.required">Password is Required</span>
            <span *ngIf="myForm.controls.mpwd.errors.minlength">Password is 3 characters</span>
        </b><br>
        <button type="button" class="btn btn-primary" (click)="handleButtonClick()">{{ title }}</button>
    </form>
    <pre>{{ myForm.value | json}}</pre>
    `
})

export class MySignComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    handleButtonClick():void {
        //console.log("Button Clicked ...UserName : ", usr, "Passord: ", pwd)
        //this.myEvent.emit({usr, pwd})
    }
    
    constructor(){
        console.log("My sign Constructor ....", this.title)
    }

    ngOnInit() {
        console.log("My sign NG ON INIT")
        this.myForm = new FormGroup({
            mname: new FormControl("", Validators.required),
            mpwd: new FormControl("", [Validators.required, Validators.minLength(3)])
        })
    }

    ngOnChanges() {
        console.log("My sign NG ON CHANGES", this.title)
    }

    ngOnDestroy() {
        console.log("My sign NG ON DESTROY")
    }
    myForm:FormGroup;
}
