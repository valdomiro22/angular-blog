import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() voltar: string = '/home';
  @Input() photoCover: string = 'https://assets-prd.ignimgs.com/2024/04/08/rdj-1712596877032.jpg';
  @Input() contentTitle: string = 'Minha notícia';
  @Input() contentDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto cumque minus beatae maiores ea earum quod accusantium laborum dignissimos, deleniti quo harum suscipit, molestiae aut corrupti itaque veniam dicta.';
}
