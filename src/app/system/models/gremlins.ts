export interface GremlinsI {
    _id?: number | string;
    nom: string;
    description: string;
    img: string;
    statut: string;
    taille?: string | number;
    specialites?:Array<string | number>;
    sexe?:string[];
}
