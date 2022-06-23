import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Bpm000Component} from "./bpm000/bpm000.component";
import {Bpm001Component} from "./bpm001/bpm001.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SharedModule} from "../../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BpmComponent} from "./bpm.component";

const ROUTES: Routes = [
  {path: '', redirectTo: 'bpm000', pathMatch: 'full'},
  {path: 'bpm000', component: Bpm000Component},
  {path: 'bpm001', component: Bpm001Component}
]

@NgModule({
  declarations: [
    Bpm001Component,
    Bpm000Component,
    BpmComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        SharedModule,
        MatTableModule,
        MatToolbarModule,
    ]
})
export class BpmModule {
}
