import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home/home.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  users: number = 0
  offers: number = 0
  prices: number = 0

  constructor(private homeService: HomeService) {
    this.users = this.homeService.users.length
    this.offers = this.homeService.offers.length
    this.prices = this.homeService.prices.length
  }

  ngOnInit(): void {

  }

}
