import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  personagem={
  nome: 'Jon Snow',
  imagem: 'https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg?ims=704x264',
  nomeAtor: 'Kit Harington',
  descricao: 'Ator ator britânico. É mais conhecido por interpretar Jon Snow na série televisiva Game of Thrones da HBO. Meu marido, mas ele não sabe U.u',
}
}
