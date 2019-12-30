import { role } from './role';

export class user {

     id: number;
     firstName: string;
     lastName: string;
     userName: string;
     roles: role[];
     password: string;

    constructor() {}

    public getFirstName(): string {
        return this.firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public getUserName(): string {
        return this.userName;
    }
    public getPassword(): string {
        return this.password;
    }
    public getRoles(): role[] {
        return this.roles;
    }
    public getid(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }
    public  setFirstname( firstName : string) {
        this.firstName = firstName;
    }
    public  setlastName(lastName : string) {
        this.lastName = lastName;
    }
    public  setuserName(userName : string) {
        this.userName = userName;
    }
    public  setPassword(password : string) {
        this.password = password;
    }
    public  setRoles(role : role[]) {
        this.roles.concat(role);
    }
}