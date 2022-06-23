import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Client} from "../user.interface";

@Component({
  selector: 'app-krnicp',
  templateUrl: './krnicp.component.html',
  styleUrls: ['./krnicp.component.scss']
})
export class KrnicpComponent implements OnInit {

  user!: Client;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('client') || '');
    if (localStorage.getItem('changed')) {
      return this.router.navigate(['/krn/accounts'])
    }
    return null;
  }

  goToAccounts(clientKey: number) {
    localStorage.removeItem('clientKey');
    localStorage.setItem('clientKey', JSON.stringify(clientKey));
    return this.router.navigate(['/krn/accounts'])
  }

  goToMain() {
    localStorage.removeItem('changed');
    return this.router.navigate(['/krn'])
  }

  goOperations(clientKey: number) {
    localStorage.removeItem('clientKey');
    localStorage.setItem('clientKey', JSON.stringify(clientKey));
    localStorage.removeItem('changed');
    return this.router.navigate(['/krn/operations'])
  }

  logOut() {
    localStorage.removeItem('changed');
    return this.router.navigate(['bpm'])
  }

}
