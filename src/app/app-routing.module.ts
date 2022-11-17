import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IssueListComponent} from "./components/issue-list/issue-list.component";
import {AppComponent} from "./app.component";
import {AddIssueComponent} from "./components/add-issue/add-issue.component";
import {IssueItemComponent} from "./components/issue-item/issue-item.component";
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [
  { path:'', component: IssueListComponent},
  { path:'addIssue', component: AddIssueComponent},
  { path:'issue/:id', component: IssueItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
