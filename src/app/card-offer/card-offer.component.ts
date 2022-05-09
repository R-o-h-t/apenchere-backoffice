import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../home/home.service";
import {Offer, Price, Product, User} from "../../models";
import {DataStore, SortDirection} from "@aws-amplify/datastore";
import {MatTableDataSource} from "@angular/material/table";
import {DateTime} from "luxon";

@Component({
  selector: 'app-card-offer',
  templateUrl: './card-offer.component.html',
  styleUrls: ['./card-offer.component.scss']
})
export class CardOfferComponent implements OnInit {

  offer: Offer | undefined
  product: Product | undefined
  user: User | undefined
  prices: Price[] | undefined
  displayedColumns: string[] = ['id','value', 'userId'];
  time: number = DateTime.now().toSeconds();
  interval = setInterval(() => {
    this.time = DateTime.now().toSeconds();
  },1000)

  constructor(private route: ActivatedRoute, public homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getOffer()
    this.getProduct()
    this.getUser()
    this.getPrices()
  }

  getOffer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.homeService.getOffer(id!).subscribe(offer => this.offer = offer);
  }

  getProduct(): void {
    const idProduct = this.offer?.product?.id
    this.homeService.getProduct(idProduct).subscribe(product => this.product = product);
  }

  getUser(): void {
    const idUser = this.offer?.product?.userID
    this.homeService.getUser(idUser).subscribe(user => this.user = user);
  }

 async getPrices() {
    let idProduct = this.offer?.product?.id
   // @ts-ignore
   this.prices = await DataStore.query(Price, prices => prices.offerID === idProduct, {
     sort: s => {
       return s.createdAt(SortDirection.DESCENDING);
     }
   })
 }

  get Pricelist(): MatTableDataSource<Price> {
    return new MatTableDataSource(this.prices)
  }

  get Chrono() {
    return DateTime.fromSeconds(this.time)>DateTime.fromISO(<string>this.offer?.startAt) ?
      DateTime.fromSeconds(this.time).diff(DateTime.fromISO(<string>this.offer?.startAt)) :
      DateTime.fromISO(<string>this.offer?.startAt).diff(DateTime.fromSeconds(this.time))
  }

}

