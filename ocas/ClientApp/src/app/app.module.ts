import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './sign-up/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,      
        UsersComponent,
        SignupComponent       
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },        
            { path: 'users', component: UsersComponent },
            { path: 'signup', component: SignupComponent }
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
