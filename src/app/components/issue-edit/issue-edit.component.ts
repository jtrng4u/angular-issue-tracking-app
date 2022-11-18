import { Component, OnInit, Input, Output } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  values = {
    description: "",
    status: false,
  };

  showSavedMessage = false;

  @Input() issue:Issue = {} as Issue;

  constructor(private issueservice:IssueService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.issueservice.setIssue({ ...this.values });
    this.showSavedMessage = true;
  }

}
