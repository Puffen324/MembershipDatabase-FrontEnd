import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
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

  public onOpenModal(member: Member, mode: string): void{
    const table = document.getElementById('main-table')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'edit'){
      button.setAttribute('data-target', '#editMemberModal')
    }
    if(mode === 'add'){
      button.setAttribute('data-target', 'addMemberModal')
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', 'deleteMemberModal')
    }
    table?.appendChild(button);
    button.click();

  }

}
