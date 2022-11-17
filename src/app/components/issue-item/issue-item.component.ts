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
  //@Input() issue:Issue = {} as Issue;
  //@Output() complete = new EventEmitter<void>();

  constructor(private issueService:IssueService, private route:ActivatedRoute) { }

  //ngOnInit(): void {
  //}

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id:string = String(params.get("id"));
    // console.log(id);
    this.issueService.getIssue(id).subscribe((response:Issue)=>{
      // console.log(response);
      this.issue = response;
    });
  }

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
