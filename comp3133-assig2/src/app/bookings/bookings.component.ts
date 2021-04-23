import { Component, OnInit } from '@angular/core';


import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const BOOKINGS_QUERY = gql`
  query bookings($offset: Int) {
    bookings(offset: $offset, limit: 10) {
      hotel_id
      booking_date
      booking_start
      booking_end
      user_id
    }
  }
`;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  page = 1;
  bookings: any[] = [];

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: BOOKINGS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.bookings = result.data && result.data.bookings;
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
