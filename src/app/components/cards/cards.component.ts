import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

cardsGroup=[
  {
  imgUrl:"../assets/All_imgaes/cards img/notebook.png ",
  cardTitle:"Test Your Brain",
  cardText:"Programmers are gods in their own private universes, which is certainly addicting, so probably it rewires their brains a bit more than most other pastimes or avocations",
  readMore:"Test Now"
},
{
  imgUrl:"../assets/All_imgaes/cards img/people.png ",
  cardTitle:"Training Mentor",
  cardText:"Open a beautiful store & increase your conversion rates. Deploy a conversion rate optimization. Best Services.",

  readMore:"Read More"
},
{
  imgUrl:"../assets/All_imgaes/cards img/thinking icon.png  ",
  cardTitle:"Thinking Creative",
  cardText:"'Thinking Creatively' is a crucial skill that involves the ability to think outside the box and come up with unique, efficient solutions to coding problems.",
  readMore:"Read More"
}


]
btnText="View All Services"
}
