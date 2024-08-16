import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfakulcsService } from '../service/afakulcs.service';
import { Afakulcs } from '../interface/afakulcs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nev', 'afakulcs', 'delete', 'update'];
  dataSource = new MatTableDataSource<Afakulcs>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private afakulcsService: AfakulcsService) {}

  ngOnInit(): void {
    this.loadAfakulcsok();
  }

  loadAfakulcsok(): void {
    this.afakulcsService.getAfakulcsok().subscribe(
      (data: Afakulcs[]) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Hiba történt az áfakulcsok lekérése során:', error);
        this.dataSource.data = [];
      }
    );
  }

  deleteAfakulcs(id: number): void {
    this.afakulcsService.deleteAfakulcs(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(afakulcs => afakulcs.id !== id);
      },
      error => {
        console.error('Hiba történt az áfakulcs törlése során:', error);
      }
    );
  }
}
