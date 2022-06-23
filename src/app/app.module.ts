import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ShellComponent} from './shell/shell.component';
import {ShellHeaderComponent} from './shell/shell-header/shell-header.component';
import {ShellSidebarComponent} from './shell/shell-sidebar/shell-sidebar.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import {AuthGuard} from "./services/auth.guard";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SharedModule} from "./shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        SharedModule,
        MatIconModule,
        MatDividerModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
