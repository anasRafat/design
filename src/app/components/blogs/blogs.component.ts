import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  blogs=[
  {img:"../../../assets/Group_1.png" ,title:"Modern Interior" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"},
  {img:"../../../assets/Group 1.png" ,title:"Exterior Project" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"},
  {img:"../../../assets/Group3.png" ,title:"Grey Beauty" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"},
  {img:"../../../assets/image 20.png" ,title:"Plantation interior" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"},
  {img:"../../../assets/image 21.png" ,title:"Role of furnitures" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"}
  ]
}
