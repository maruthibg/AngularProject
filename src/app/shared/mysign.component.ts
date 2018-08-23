import { Component, Input, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from "@angular/core"

@Component({
    selector: "my-sign",
    template: `<h3>{{ title }}</h3>
    <form>
        UserName : <input type="text" placeholder="Enter User Name" #frmUser> <br>
        Password : <input type="text" placeholder="Enter Password" #frmPwd> <br>
        <button type="button" class="btn btn-primary" (click)="handleButtonClick(frmUser.value, frmPwd.value)">{{ title }}</button>
    </form>
    `
})

export class MySignComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    handleButtonClick(usr, pwd):void {
        console.log("Button Clicked ...UserName : ", usr, "Passord: ", pwd)
        this.myEvent.emit({usr, pwd})
    }
    
    constructor(){
        console.log("My sign Constructor ....", this.title)
    }

    ngOnInit() {
        console.log("My sign NG ON INIT")
    }

    ngOnChanges() {
        console.log("My sign NG ON CHANGES", this.title)
    }

    ngOnDestroy() {
        console.log("My sign NG ON DESTROY")
    }
}