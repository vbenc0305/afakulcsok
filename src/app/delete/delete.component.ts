import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfakulcsService } from '../service/afakulcs.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id: number | undefined;
  message: string | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afakulcsService: AfakulcsService
  ) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.deleteAfakulcs();
      }
    });
  }

  deleteAfakulcs(): void {
    if (this.id !== undefined) {
      this.afakulcsService.deleteAfakulcs(this.id).subscribe(
        () => {
          console.error(this.id+"HFDASF");
          console.log('Áfakulcs törölve');
          alert("Áfakulcs törölve");
          this.router.navigate(['/']); // Törlés után navigáljon vissza a főoldalra vagy egy másik oldalra
        },
        error => {
          console.error('Hiba történt az áfakulcs törlése során:', error);
          alert("Áfakulcs törölve");

          // Hiba kezelése, pl. üzenet megjelenítése
        }
      );
    }
  }
}
