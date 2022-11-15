import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddIssueComponent} from "./components/add-issue/add-issue.component";

const routes: Routes = [
  {path:"/addIssue", component: AddIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
