import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  @Input() issue:Issue = {} as Issue;

  constructor(private issueservice:IssueService) { }

  ngOnInit(): void {
  }


  removeIssueItem():void {
    console.log("Removing Issue " + this.issue._id);
    this.issueservice.deleteIssue(this.issue);
    
  }

}
