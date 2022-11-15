import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Issue} from "../models/issue";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url: string = "";
  issues: Issue[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getIssues(): Observable<Issue> {
    this.httpClient.get<Issue>(this.url).subscribe(resp => {

    });
  }

  addIssue(issue: Issue): void {

  }

  updateIssue(issue: Issue): void {

  }

  filterIssues() {

  }
}
