import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  resume() {
    window.location.href = 'https://orcid.org/0000-0003-1819-5371';
  }

  lattes() {
    window.location.href =
      'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4323228Z4';
  }

  googleScholar() {
    window.location.href =
      'https://scholar.google.com.br/citations?user=10xWaMQAAAAJ&hl=pt-BR';
  }

  researchGate() {
    window.location.href =
      'https://www.researchgate.net/profile/Caian-Gerolamo';
  }
}
