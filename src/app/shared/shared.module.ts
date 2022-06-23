import {NgModule} from "@angular/core";
import {KrnicpComponent} from "./krnicp/krnicp.component";
import {SharedComponent} from "./shared.component";
import {LoaderComponent} from "./loader/loader.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {PopupDirective} from "./popup.directive";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    KrnicpComponent,
    SharedComponent,
    LoaderComponent,
    PopupDirective
  ],
    exports: [
        SharedComponent,
        KrnicpComponent,
        PopupDirective,
        LoaderComponent
    ],
    imports: [
        MatProgressBarModule,
        CommonModule,
        MatDividerModule,
        MatButtonModule
    ]
})
export class SharedModule {

}
