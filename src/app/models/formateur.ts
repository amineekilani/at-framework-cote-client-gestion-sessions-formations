export class Formateur
{
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    cin: string;
    photo: string;
    cv: string;
    specialites: string[];
    constructor()
    {
        this.nom="";
        this.prenom="";
        this.email="";
        this.telephone="";
        this.cin="";
        this.photo="";
        this.cv="";
        this.specialites=[""];
    }
}