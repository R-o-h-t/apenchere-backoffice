import { Component, OnInit  } from '@angular/core';
import {User} from "../../models";
import {HomeService} from "../home/home.service";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";
import {DataStore} from "@aws-amplify/datastore";


export interface IUser  {
    id: string,
    nom: string,
    email:  string,
    prenom: string
  }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [HomeService]
})


export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id','email', 'nom', 'prénom'];
  users: any[] = []
  myListUser: IUser[] = []

  get listUsers(): MatTableDataSource<IUser> {
    return new MatTableDataSource<IUser>(this.myListUser)
  }

  constructor(private homeService: HomeService) {
    this.users = this.homeService.users
    this.mapUser()
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.mapUser()
    }, 200);
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listUsers.filter = filterValue.trim().toLowerCase();
  }

  mapUser() {
    this.users.forEach(user => {
      this.myListUser.push({
        id: user.id,
        nom: user.lastname,
        email: user.email,
        prenom: user.firstname
      })
    })
  }

  editUser(id: number) {

  }

  async deleteUser(user: User) {

  }
}
