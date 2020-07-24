import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Participant } from '../../model/participant';
import { ocasService } from '../../services/ocas.service';

@Component({
    selector: 'app-counter-component',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    public formData: Participant = new Participant();
    formGroup: FormGroup;
    isSubmitted = false;
    emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    titleAlert: string = 'This field is required'; //This should be moved to common class;
    constructor(private formBuilder: FormBuilder, private appService: ocasService) { }

    ngOnInit() {         
        this.formGroup = this.formBuilder.group({
            'firstname': [null, Validators.required],
            'lastname': [null, Validators.required],
            'email': [null, [Validators.required, Validators.pattern(this.emailregex)]],
            'activity': [null, Validators.required],
            'comments': ['', Validators.nullValidator]
             
        });       
    }

    getErrorEmail() {
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }

    get firstname() {
        return this.formGroup.get('firstname') as FormControl
    }
    get lastname() {
        return this.formGroup.get('lastname') as FormControl
    }
    get email() {
        return this.formGroup.get('email') as FormControl
    }
    get activity() {
        return this.formGroup.get('activity') as FormControl
    }

    public setActivity(val) {
        this.formData.Activity = val;
    }

    get comments() {
        return this.formGroup.get('comments') as FormControl
    }   

    onSubmit(post) {

        this.appService.postRequests("api/Participant", this.formData).subscribe(result => {
            this.formData.Activity = "";
            this.formData.Comments = "";
            this.formData.EmailAddress = "";
            this.formData.FirstName = "";
            this.formData.LastName = "";
            this.formGroup.reset();
            alert("Data Saved successfully");

        }, error => console.error(error));

       
    }
}
