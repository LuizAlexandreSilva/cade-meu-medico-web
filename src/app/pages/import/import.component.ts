import { Component, OnInit } from '@angular/core';
import { ImportService } from 'src/app/services/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor(
    private importService: ImportService,
  ) { }

  ngOnInit(): void {
  }

  carregarArquivo(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const files = element.files;
    if (files) {
      console.log(files)
      const arquivo = files[0];
      this.importService.importar(arquivo)
        .subscribe(() => console.log('sucesso'))
    }
  }

}
