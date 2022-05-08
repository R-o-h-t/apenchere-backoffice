import {Component, OnInit} from '@angular/core';
import {Offer, Price, Product, User} from "../models";
import {DataStore} from "@aws-amplify/datastore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backoffice';


  ngOnInit(): void {

  }

}
