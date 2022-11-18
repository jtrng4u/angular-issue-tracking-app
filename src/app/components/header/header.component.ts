import { Component, Input, OnInit } from '@angular/core';
import {IssueService} from "../../services/issue.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private issueService: IssueService) { }
  @Input() openIssuesCount: number = 0;

  ngOnInit(): void {
    // this.issueService.getIssues().subscribe(issues => {
    //   console.log("got these issues", issues);
    //   this.openIssuesCount = issues.filter(issue => issue.status).length;
    // })
  }
}
