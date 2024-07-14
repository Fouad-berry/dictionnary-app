import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DictionnaireService {

  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  getDefinition(mot: string): Observable<string[]> {
    return this.http.get<any[]>(`${this.apiUrl}${mot}`).pipe(
      map(response => {
        if (response && response[0] && response[0].meanings) {
          return response[0].meanings.flatMap((meaning: any) => meaning.definitions.map((def: any) => def.definition));
        }
        return ['Définition non trouvée.'];
      })
    );
  }
}
