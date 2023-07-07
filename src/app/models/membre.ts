import { Role } from "./role"

export class Membre {
    id!:number
    nom!:string
    prenom!:string
    pseudo!:Date
    role!:Role
    mdp!:string
}
