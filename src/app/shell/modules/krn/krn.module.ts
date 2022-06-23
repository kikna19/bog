import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountsComponent} from "./accounts/accounts.component";
import {ShowComponent} from "./accounts/show/show.component";
import {CreateComponent} from "./accounts/create/create.component";
import {OperationsComponent} from "./operations/operations.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KrnComponent} from "./krn.component";
import {SharedModule} from "../../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";

const ROUTES: Routes = [
  {path: '', redirectTo: 'krnicp', pathMatch: 'full'},
  {path: 'krnicp', component: KrnComponent},
  {
    path: 'accounts', component: AccountsComponent, children: [
      {path: '', component: ShowComponent},
      {path: 'create', component: CreateComponent}
    ]
  },
  {path: 'operations', component: OperationsComponent},
]

@NgModule({
  declarations: [
    KrnComponent,
    AccountsComponent,
    ShowComponent,
    OperationsComponent,
    CreateComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatProgressBarModule,
    ],
  exports: [],
})
export class KrnModule {
}
