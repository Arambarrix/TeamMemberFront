import { Equipe } from "./equipe"
import { Projet } from "./projet"

export class ContratProjet {
    id!:number
    equipe!:Equipe
    projet!:Projet
    debut!:Date
    fin!:Date
}
