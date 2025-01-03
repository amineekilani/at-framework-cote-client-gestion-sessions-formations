export class Formation
{
    id?: number;
    titre: string;
    description: string;
    chargeHoraire: number;
    programme: string;
    niveau: "Débutant" | "Intermédiaire" | "Avancé";
    tags: string[];
    categorie: string;
    constructor()
    {
        this.titre = '';
        this.description = '';
        this.chargeHoraire = 0;
        this.programme = '';
        this.niveau = 'Débutant';
        this.tags = [];
        this.categorie = '';
    }
}