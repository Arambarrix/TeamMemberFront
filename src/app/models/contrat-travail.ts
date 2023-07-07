import { Equipe } from "./equipe"
import { Membre } from "./membre"

export class ContratTravail {
    id!:number
    equipe!:Equipe
    membre!:Membre
    debut!:Date
    fin!:Date
}
