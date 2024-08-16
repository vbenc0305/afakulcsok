import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfakulcsService } from '../service/afakulcs.service';
import { Afakulcs } from '../interface/afakulcs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number | undefined;
  afakulcs: Afakulcs = { id: 0, nev: '', afakulcs: 0, statusz: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afakulcsService: AfakulcsService
  ) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.loadAfakulcs(this.id);
      }
    });
  }

  ngOnInit(): void {}

  loadAfakulcs(id: number): void {
    this.afakulcsService.getAfakulcs(id).subscribe(
      (data: Afakulcs) => {
        this.afakulcs = data;
      },
      error => {
        console.error('Hiba történt az áfakulcs lekérése során:', error);
      }
    );
  }

  updateAfakulcs(): void {
    if (this.id !== undefined) {
      this.afakulcsService.updateAfakulcs(this.id, this.afakulcs).subscribe(
        () => {
          console.log('Áfakulcs frissítve');
          window.alert("Sikeres frissités!");
          this.router.navigate(['/']); // Frissítés után navigáljon vissza a főoldalra vagy egy másik oldalra
        },
        error => {
          console.error('Hiba történt az áfakulcs frissítése során:', error);
        }
      );
    }
  }
}
