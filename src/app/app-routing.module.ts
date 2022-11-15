import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"/", component = IssueList},
  {path:"/:issueId", component = Issue},
  {path:"/issues/:assignee", component = IssueList},
  {path:"/issues/:assignee", component = IssueList},
  {path:"/addIssue", component = AddIssue},
  {path:"/**", component = IssueList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
