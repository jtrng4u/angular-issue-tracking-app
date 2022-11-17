import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { IssueItemComponent } from './components/issue-item/issue-item.component';

@NgModule({
  declarations: [
    AppComponent,
    //AddIssueComponent,
    IssueItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
