import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IssueListComponent} from "./components/issue-list/issue-list.component";
import {AppComponent} from "./app.component";
import {AddIssueComponent} from "./components/add-issue/add-issue.component";

const routes: Routes = [
  { path:'/', component: AppComponent},
  { path:'/issues', component: IssueListComponent},
  { path:'/addIssue', component: AddIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
