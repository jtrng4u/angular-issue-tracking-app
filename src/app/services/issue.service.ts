import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Issue} from "../models/issue";
import {Observable} from "rxjs";
import {Secret} from "../models/secret";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url: string = "https://issuetracking-8a3d.restdb.io/rest/issues";
  secret: string = Secret.apiKey;
  constructor(private httpClient: HttpClient) {
  }

  getIssues(): Observable<Issue[]>  {
    return this.httpClient.get<Issue[]>(this.url, {headers: {"x-apikey": this.secret}});
  }

  getIssue(id: string): Observable<Issue>  {
    return this.httpClient.get<Issue>(this.url + "/" + id, {headers: {"x-apikey": this.secret}});
  }

  addIssue(issue: Issue): Observable<Issue> {
    console.log('add issue called, key is', this.secret, issue);
    return this.httpClient.post<Issue>(this.url,  issue, {headers: {"x-apikey": this.secret}});
  }

  closeIssue(id: string, closeDate: Date): Observable<Issue> {
    let data = {
      "_id": id,
      "closeDate": closeDate.toString()
    };
    return this.httpClient.patch<Issue>(this.url+ "/" + id,  data, {headers: {"x-apikey": this.secret}});
  }

  updateIssue(issue: Issue): Observable<Issue> {
    console.log('updated issue is: ', issue);
    return this.httpClient.patch<Issue>(this.url+ "/" + issue._id,  issue, {headers: {"x-apikey": this.secret}});
  }

  deleteIssue(issue: Issue): Observable<string> {
    return this.httpClient.delete<string>(this.url + "/" + issue._id,  {headers: {"x-apikey": this.secret}});
  }

  filterIssues(assignee: string): Observable<Issue[]> {
    let qParams = `?q={"assignee": {"$regex": "(.*${assignee}.*)"}}`;
    console.log('qParams is ', qParams);
    return this.httpClient.get<Issue[]>(this.url + qParams,  {headers: {"x-apikey": this.secret}});
  }
}
