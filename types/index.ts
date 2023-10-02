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
