import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Afakulcs } from '../interface/afakulcs'; // Itt importáljuk be az Afakulcs interfészt vagy típust

@Injectable({
  providedIn: 'root'
})
export class AfakulcsService {
  private apiUrl = 'https://marik.dev.frederik.hu/afakulcsok';

  constructor(private http: HttpClient) { }

  getAfakulcsok(): Observable<Afakulcs[]> {
    return this.http.get<Afakulcs[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  deleteAfakulcs(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error(id);
        console.error('Hiba történt az áfakulcs törlése során:', error);
        return throwError('Valami hiba történt. Kérjük, próbálkozzon később.');
      })
    );
  }

  addAfakulcs(afakulcs: Afakulcs): Observable<Afakulcs> {
    return this.http.post<Afakulcs>(this.apiUrl, afakulcs).pipe(
      catchError((error: any) => {
        console.error('Hiba történt az áfakulcs hozzáadása során:', error);
        return throwError('Valami hiba történt. Kérjük, próbálkozzon később.');
      })
    );
  }

  getAfakulcs(id: number): Observable<Afakulcs> {
    return this.http.get<Afakulcs>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Hiba történt az áfakulcs lekérése során:', error);
        return throwError('Valami hiba történt. Kérjük, próbálkozzon később.');
      })
    );
  }

  updateAfakulcs(id: number, afakulcs: Afakulcs): Observable<void> {
    let params = new HttpParams()
      .set('nev', afakulcs.nev)
      .set('afakulcs', afakulcs.afakulcs.toString())
      .set('statusz', afakulcs.statusz)
      .set('id', id.toString());

    return this.http.put<void>(`${this.apiUrl}/${id}`, params).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('Hiba történt:', error);
    return throwError('Valami hiba történt. Kérjük, próbálkozzon később.');
  }

}
