import { Candidat } from "./candidat";
import { Formateur } from "./formateur";
import { Formation } from "./formation";

export class Session
{
    id?: number;
    formation: Formation;
    formateurs: Formateur[];
    candidats: Candidat[];
    dateDebut: Date;
    dateFin: Date;
    description: string;
    constructor()
    {
        this.formation = new Formation();
        this.formateurs = [];
        this.candidats = [];
        this.dateDebut = new Date();
        this.dateFin = new Date();
        this.description = '';
    }
}