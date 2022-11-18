import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Issue} from 'src/app/models/issue';
import {IssueService} from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  displayEdit: boolean = false;

  issue: Issue = {} as Issue;

  constructor(private issueService: IssueService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id: string = String(params.get("id"));
    // console.log(id);
    this.issueService.getIssue(id).subscribe((response: Issue) => {
      // console.log(response);
      this.issue = response;
    });
  }

  editIssue() {
    console.log('status is', typeof(this.issue.status));

    let updateIssue: Issue = {... this.issue};

    if (this.issue.status+"" == "false") {
      updateIssue.status = false;
      updateIssue.closeDate = new Date;
    } else {
      updateIssue.status = true;
      updateIssue.closeDate = null;
    }

    this.issueService.updateIssue(updateIssue).subscribe((t) => this.issue = t);
  }

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }
}
