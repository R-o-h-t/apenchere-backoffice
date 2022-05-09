import {Injectable, OnInit} from '@angular/core';
import {Offer, Price, Product, User} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  title = 'backoffice';
  offers: Offer[] = [];
  products: Product[] = [];
  users: User[] = [];
  prices: Price[] = [];

  constructor() {
    this.getOffers().then(offers => {
      if (offers) {
        for (let offer of offers) {
          this.setOffer(offer);
        }
      }
    })
    this.getProducts().then(products => {
      if (products) {
        for (let product of products) {
          this.setProduct(product);
        }
      }
    })
    this.getUsers().then(users => {
      if (users) {
        for (let user of users) {
          this.setUser(user);
        }
      }
    })
    this.getPrices().then(prices => {
      if (prices) {
        for (let price of prices) {
          this.setPrice(price);
        }
      }
    })
  }


  async getOffers()  {
    let offers;
    try {
      offers = await DataStore.query(Offer);
    } catch (e) {
      console.log('Error retrieving offers: ', e);
    }
    return offers;
  }

  async getProducts()   {
    let products;
    try {
      products = await DataStore.query(Product);
    } catch (e) {
      console.log('Error retrieving products: ', e);
    }
    return products;
  }

  async getUsers()  {
    let user;
    try {
      user = await DataStore.query(User);
    } catch (e) {
      console.log('Error retrieving user: ', e);
    }
    return user;
  }

  async getPrices()  {
    let prices;
    try {
      prices = await DataStore.query(Price);
    } catch (e) {
      console.log('Error retrieving prices: ', e);
    }
    return prices;
  }

  setOffer(offer: Offer) {
    this.offers.push(offer);
  }
  setProduct(product: Product) {
    this.products.push(product);
  }
  setUser(user: User) {
    this.users.push(user);
  }
  setPrice(price: Price) {
    this.prices.push(price);
  }

  getOffer(id: string): Observable<Offer> {
    const offer = this.offers.find(offer => offer.id === id);
    return of(offer!);
  }

  getProduct(id: string | undefined): Observable<Product> {
    const product = this.products.find(product => product.id === id);
    return of(product!);
  }

  getUser(id: string | undefined): Observable<User> {
    const user = this.users.find(user => user.id === id);
    console.log(user);
    return of(user!);
  }

  getUserForList(id: string | undefined): string {
    const user = this.users.find(user => user.id === id);
    console.log(user);
    if (user) {
      return `${user.firstname} ${user.lastname}`;
    }
    return '';
  }
}
