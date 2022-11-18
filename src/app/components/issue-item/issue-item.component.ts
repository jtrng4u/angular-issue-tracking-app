import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  displayEdit:boolean = false;

  issue:Issue = {} as Issue;

  constructor(private issueService:IssueService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id:string = String(params.get("id"));
    // console.log(id);
    this.issueService.getIssue(id).subscribe((response:Issue)=>{
      // console.log(response);
      this.issue = response;
    });
  }

  editIssue() {
    this.issueService.updateIssue(this.issue).subscribe((t) => console.log('Issue updated', t));
  }

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
