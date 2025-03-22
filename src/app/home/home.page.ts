import { Component } from '@angular/core';

interface ReaderInfo{
  rName: string
  read_the_tutorial: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  pageName = "Восстань!"
  books_types = ["Книга", "Библия", "Страница"]
  readers: ReaderInfo[] = [
    {rName:"AraemKaedr", read_the_tutorial:53},
    {rName:"Angil from the Underworld", read_the_tutorial:104},
  ]

  constructor() {}

  btnClick(){
    this.pageName = this.pageName + "+"
  }

}
