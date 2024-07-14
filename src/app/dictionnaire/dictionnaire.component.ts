import { Component } from '@angular/core';
import { DictionnaireService } from '../dictionnaire.service';

@Component({
  selector: 'app-dictionnaire',
  templateUrl: './dictionnaire.component.html',
  styleUrls: ['./dictionnaire.component.css']
})
export class DictionnaireComponent {
  mot: string = '';
  definitions: string[] = [];

  constructor(private dictionnaireService: DictionnaireService) {}

  chercherMot() {
    this.dictionnaireService.getDefinition(this.mot).subscribe(defs => {
      this.definitions = defs;
    });
  }
}
