import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PmdComponent} from "./pmd.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

const ROUTES: Routes = [
  {path: '', redirectTo: 'pmd311', pathMatch: 'full'},
  {path: 'pmd311', component: PmdComponent}
]


@NgModule({
  declarations: [
    PmdComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class PmdModule {
}
