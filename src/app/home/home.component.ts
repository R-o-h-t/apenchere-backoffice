import {Component, Input, OnInit} from '@angular/core';
import {Offer, Price, Product, User} from "../../models";
import {DateTime} from "luxon";
import {HomeService} from "./home.service";

export interface IOffer {
  id: string;
  isPublished: boolean;
  startAt: string;
  endAt: string;
  product: Product;
  user: User;
  price: any;
}

export interface ImaxPrice{
  offerID: string;
  userID: string;
  value: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

   offers: Offer[] | undefined;
   products: Product[] | undefined;
   users: User[] | undefined;
   prices: Price[] | undefined;

  constructor(private homeService: HomeService) {
    this.offers = this.homeService.offers;
    this.products = this.homeService.products;
    this.users= this.homeService.users;
    this.prices = this.homeService.prices;
    console.log(this.homeService.offers);
  }

  maxPrice: ImaxPrice[] = [];
  data: any[] = [];


  ngOnInit() {
    setTimeout(() => {
      this.getData();
      this.getMaxOfferPrice()
      this.data = this.getData();
    }, 1000);
  }

  getData() {
   const listOffers: IOffer[] = []
    if (this.offers) {
      this.offers.forEach(offer => {
        let myProducts = this.products?.find(product => product.id === offer.product?.id);
        let myUser = this.users?.find(user => user.id === offer.userID);
        let PriceArray = this.maxPrice?.filter(price => price.offerID === offer.id );
        let Price = PriceArray[0];
        let myOffer: IOffer = {
          id: offer.id,
          isPublished: offer.isPublished!,
          startAt: offer.startAt,
          endAt: offer.endAt,
          product: myProducts!,
          user: myUser!,
          price: Price!
        };
        listOffers.push(myOffer);
      });
    }
    return listOffers;
  }


  getMaxOfferPrice() {
    this.offers?.map(offer => {
      let myMaxPrice = {
        offerID: offer.id,
        userID: offer.userID,
        value: Math.max(...(this.prices!.filter(({ offerID }) => offerID === offer.id).map(({ value }) => value)))
      }
      this.maxPrice.push(myMaxPrice);
    })
  }




}
