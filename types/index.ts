export interface actionInterface {
  type: string;
  payload: any;
}

export interface rowInterface {
  original: {
    id: number;
    username: string;
    email: string;
  };
}
