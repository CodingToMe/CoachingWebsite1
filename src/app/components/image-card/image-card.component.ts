import { Component } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
 ImgCarData:any=[
  {
    cardHeading:"We Can Help You In Different Situations buy this Courses",
    Description:"IDS Courses are the best-proven methods to upgrade your skillset and give you a career boost by opening so many doors to newer opportunities. However, due to an overload of information, it can be exhausting and discouraging to find a course that’s suitable for you." ,
    InnerData:["We have provide 100% Job Assistance","Coaching Courses for Life","Provides Recording Videos","We have best support community","Call us 24/7 we are Online" ],
    btnText:"More About"
  }
 ]
}
