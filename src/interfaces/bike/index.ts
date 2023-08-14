import { RentalInterface } from 'interfaces/rental';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BikeInterface {
  id?: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  organization?: OrganizationInterface;
  _count?: {
    rental?: number;
  };
}

export interface BikeGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  organization_id?: string;
}
