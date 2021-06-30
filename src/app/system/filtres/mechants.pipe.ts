import { identifierModuleUrl } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { GremlinsI } from '../models/gremlins';

@Pipe({
  name: 'mechants'
})
export class MechantsPipe implements PipeTransform {

  transform(gremlinsTab: Array<GremlinsI>, filtre: string): Array<GremlinsI> | GremlinsI[] {
    if (!gremlinsTab) return [];
    if (!filtre) return gremlinsTab;

    return gremlinsTab.filter(g => g.statut == filtre);
  }

}
@Pipe({
  name: 'gremlinNom'
})
export class NomsPipe implements PipeTransform {

  transform(gremlinsTab: Array<GremlinsI>, filtre: string): Array<GremlinsI>{
    filtre = filtre.toLocaleLowerCase();
    if (!gremlinsTab) return [];
    if (!filtre) return gremlinsTab;

    return gremlinsTab.filter(g => g.nom.indexOf(filtre) != -1 || g.description.indexOf(filtre) != -1);
  }

}

