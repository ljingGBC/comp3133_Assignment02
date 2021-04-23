import { Component, OnInit } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const HOTELS_QUERY = gql`
  query hotels($offset: Int) {
    Hotel(offset: $offset, limit: 10) {
      hotel_id
      hotel_name
      street
      city
      postal_code
      price
      email
    }
  }
`;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  page = 1;
  hotels: any[] = [];

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {

    this.query = this.apollo.watchQuery({
      query: HOTELS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.hotels = result.data && result.data.hotels;
    });

  }

  update() {
    this.query.refetch({ offset: 10 * this.page });
  }

  nextPage() {
    this.page++;
    this.update();
  }

  prevPage() {
    if (this.page > 0) this.page--;
    this.update();
  }

}
