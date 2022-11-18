import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Issue} from 'src/app/models/issue';
import {IssueService} from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  results: Issue[] = [];

  filter = {
    assignee: "",
    description: "",
  }

  showSavedMessage = false;

  constructor(private issueservice: IssueService) {
  }

  submitForm(): void {
    this.issueservice.filterIssues(this.filter.assignee).subscribe(results => this.results = results);
  }

  ngOnInit(): void {
    this.results = [];
    console.log("Requesting issues from api");

    //subsribe is asynchronous
    this.issueservice.getIssues().subscribe(
      (response: Issue[]) => {
        console.log("Getting all api issues.")
        console.log(response);
        let issues = response;
        this.results = issues;
      },
      //error handling
      (err) => {
        console.log(err);
      }
    );
    console.log("After Api call")
  }

  closeIssue(_id: string): void {
    this.issueservice.closeIssue(_id, new Date()).subscribe(t => console.log('issue closed'));
  }
}
