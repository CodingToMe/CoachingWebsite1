import { Component } from '@angular/core';

@Component({
  selector: 'app-parchese-card',
  templateUrl: './parchese-card.component.html',
  styleUrls: ['./parchese-card.component.css']
})
export class ParcheseCardComponent {


  parchesCardData:any=[
    {
    PriceText:"Price",
    Price:"15000/-",
    months:"3-4/ months",
    courseName:"MEAN Stack Developer",
    courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
    btnText:"Purchase now"
},
{
  PriceText:"Price",
  Price:"6500/-",
  months:"2-3/ months",
  courseName:"Python Developer",
  courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
  btnText:"Purchase now"
},
{
  PriceText:"Price",
  Price:" 7000/-",
  months:"2-3/ months",
  courseName:"JavaScript Developer",
  courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
  btnText:"Purchase now"
}
]
}
