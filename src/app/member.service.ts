import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

public getMembers(): Observable<Member[]> {
  return this.http.get<Member[]>(`${this.apiServerUrl}/member/all`)
}

public getMemberById(memberId: number): Observable<Member> {
  return this.http.get<Member>(`${this.apiServerUrl}/member/find/${memberId}`)
}

public addMember(member: Member): Observable<Member> {
  return this.http.post<Member>(`${this.apiServerUrl}/member/add`, member);
}

public updateMember(member: Member): Observable<Member> {
  return this.http.put<Member>(`${this.apiServerUrl}/member/update`, member)
}

public deleteMember(memberId: number): void {
  this.http.delete<Member>(`${this.apiServerUrl}/member/delete/${memberId}`)
}

}
