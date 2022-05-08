import {Component, Input, OnInit} from '@angular/core';
import {DateTime} from "luxon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-offer',
  templateUrl: './table-offer.component.html',
  styleUrls: ['./table-offer.component.scss']
})
export class TableOfferComponent implements OnInit {

  @Input() offer: any;
  time: number = DateTime.now().toSeconds();
  interval = setInterval(() => {
    this.time = DateTime.now().toSeconds();
  },1000)

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  gotoOffer(offer: any) {
    this.router.navigate(['/offer', offer.id]);
  }

  get Chrono() {
    return DateTime.fromSeconds(this.time)>DateTime.fromISO(this.offer.startAt) ? DateTime.fromSeconds(this.time).diff(DateTime.fromISO(this.offer.startAt)) : DateTime.fromISO(this.offer.startAt).diff(DateTime.fromSeconds(this.time))
  }

}
