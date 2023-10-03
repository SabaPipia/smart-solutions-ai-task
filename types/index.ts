import { Key } from "react";

export interface actionInterface {
  type: string;
  payload: any;
}

export interface rowInterface {
  row: {
    original: {
      id: number;
      name: string;
      email: string;
      address: { city: string };
    };
  };
}
export interface editedUser {
  row: {
    original: {
      id: number;
      name: string;
      email: string;
      address: { city: string };
    };
  };
  editedName: string;
  editedEmail: string;
  editedCity: string;
}

export interface addUserInterface {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export interface userInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface stateInterface {
  data: {
    users: userInterface[];
    loading: boolean;
  };
}

export interface CellInter {
  getContext(): any;
  id: string;
  row: {
    id: string;
    index: number;
    original: {
      id: number;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        };
      };
      phone: string;
      website: string;
      company: {
        name: string;
        catchPhrase: string;
        bs: string;
      };
    };
    depth: number;
    _valuesCache: {
      name: string;
      email: string;
      address_city: string;
    };
    _uniqueValuesCache: {};
    subRows: [];
    columnFilters: {};
    columnFiltersMeta: {};
    _groupingValuesCache: {};
  };
  column: {
    id: string;
    depth: number;
    columnDef: {
      cell(cell: any, arg1: any): import("react").ReactNode;
      header: string;
      filterFn: string;
      sortingFn: string;
      sortUndefined: number;
      aggregationFn: string;
      size: number;
      minSize: number;
      maxSize: number;
      accessorKey: string;
    };
    columns: [];
  };
}

export interface rowInter {
  getVisibleCells(): any;
  getIsSelected(): unknown;
  id: Key | null | undefined;
  original: any;
}
