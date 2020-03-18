import { Client } from './Client';
import { Domaine } from './Domaine';

export class employee {

      id : number;
	  firstName : string;
	  lastName : string;
	  age : number;
	  client : Client;
	  domaine :Domaine;
	  anciennete :number;
	  niveau : string;
	  nationalité : string;
	  score : number;
	  photoIdentity :string;

    constructor() {
    }
 
}