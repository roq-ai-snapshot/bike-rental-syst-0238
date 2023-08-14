import { UserInterface } from 'interfaces/user';
import { BikeInterface } from 'interfaces/bike';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  customer_id?: string;
  bike_id?: string;
  rental_start: any;
  rental_end?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  bike?: BikeInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  bike_id?: string;
}
