export class User {
  email: string;
  password: string;
  surname: string;
  firstname: string;

  constructor(
    email: string, password: string, firstname: string, surname: string) {
    this.email = email;
    this.password = password;
    this.surname = surname;
    this.firstname =  firstname;
  }
}
