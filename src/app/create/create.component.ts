import { Component } from '@angular/core';
import {Afakulcs} from "../interface/afakulcs";
import {AfakulcsService} from "../service/afakulcs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  afakulcs: Afakulcs = { id: 0, nev: '', afakulcs: 0, statusz:2 };
  message: string | undefined;

  constructor(
    private afakulcsService: AfakulcsService,
    private router: Router
  ) {}

  addAfakulcs(): void {
    this.afakulcsService.addAfakulcs(this.afakulcs).subscribe(
      () => {
        console.error(this.afakulcs);
        console.log('Áfakulcs hozzáadva');
        this.message = 'Sikeres hozzáadás';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000); // Navigáljon vissza a főoldalra 3 másodperc múlva
      },
      error => {
        console.error('Hiba történt az áfakulcs hozzáadása során:', error);
        this.message = 'Sikertelen hozzáadás';
      }
    );
  }
}
