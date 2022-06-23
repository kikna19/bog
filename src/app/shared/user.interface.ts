export interface Client {
  clientKey: number,
  firstName: string,
  image: string,
  lastName: string,
  plusPoints: number,
  sumAmount: number;
}

export interface User {
  image: string,
  name: string,
  username: string,
}

export interface Account {
  accountKey: number,
  accountName: string,
  clientFirstName: string,
  clientLastName: string,
  amount: number,
}

export const assertType = <T>(el: any): T => {
  return el;
}

export const objValues = <T>(controls: any): T[] => {
  return Object.keys(controls).map((key: string) => controls[key].value)
}
