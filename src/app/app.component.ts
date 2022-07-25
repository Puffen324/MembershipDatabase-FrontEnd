import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public members: Member[];

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
    this.getMembers();
  }

  public getMembers(): void{
    this.memberService.getMembers().subscribe(members => this.members = members);
      
  }
}
