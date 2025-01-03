export class Candidat
{
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    cin: string;
    photo: string;
    motDePasse: string;
    constructor()
    {
        this.nom="";
        this.prenom="";
        this.email="";
        this.cin="";
        this.photo="";
        this.motDePasse="";
    }
}