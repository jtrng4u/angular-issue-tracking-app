import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  results:Issue[] = [
  ];

  constructor(private issueservice:IssueService) { }

  ngOnInit(): void {
    this.results = [];
    console.log("Requesting issues from api");
    
    //subsribe is asynchronous
    this.issueservice.getIssues().subscribe(
      (response:Issue[]) => {
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

}
