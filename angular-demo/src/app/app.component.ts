import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  algorithmType = "Quick Sort"
  changeAlgorithm(ev)
  {
    this.algorithmType = ev.target.value;
  }

  rankingNumber = "9"
  changeRanking(ev)
  {
    this.rankingNumber = ev.target.value;
  }

  image = "https://i.makeagif.com/media/11-29-2015/Uf4BMe.gif"
  changeImage(ev)
  {
    this.image = ev.target.value;
  }

  arrayLetters = ['a','f','c','l','p','b','q'];
}
