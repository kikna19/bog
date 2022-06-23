import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  signOut: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goMain(){
    localStorage.removeItem('changed');
    return this.router.navigate(['bpm'])
  }

  logOut(){
    localStorage.clear();
    return this.router.navigate([''])
  }
  close(e:boolean){
    this.signOut = e;
  }
}
