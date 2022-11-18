import { Component, OnInit } from '@angular/core';
import {Issue, SeverityTypeEnum} from "../../models/issue";
import {IssueService} from "../../services/issue.service";

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  issue: Issue = {} as Issue;
  severities = Object.values(SeverityTypeEnum);
  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  addIssue() {
    let newIssue:Issue = {
      description: this.issue.description,
      assignee: this.issue.assignee,
      status: Boolean(this.issue.status),
      severity: this.issue.severity,
      creationDate: new Date(),
      closeDate: null
    }

    this.issueService.addIssue(newIssue).subscribe((t) => console.log('Issue added', t));
  }

}
