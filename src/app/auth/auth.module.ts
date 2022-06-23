import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedModule} from "../shared/shared.module";

const ROUTES: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    SharedModule,
  ]
})
export class AuthModule {
}
