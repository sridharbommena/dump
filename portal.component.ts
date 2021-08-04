import { Component, OnInit } from '@angular/core';
import { post } from './post';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor() { }
  posts:post[] = [];
  dummyPost:post = Object.create(
      { 
        id: null,
        heading: "do it now some dummy text",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus ipsum, elementum id enim non, finibus tempus est. Integer molestie, nisi ut bibendum cursus, eros est lobortis leo, vel commodo elit turpis vel arcu. Aenean tempus ex vitae gravida ultricies. Vestibulum finibus fermentum felis. Duis odio neque, iaculis non justo porttitor, pulvinar sollicitudin lacus. Morbi non dolor nunc. Phasellus semper id ante nec condimentum. Nam quis nunc varius, finibus ipsum sed, rutrum orci. Donec dui elit, porttitor facilisis lacus sit amet, bibendum porta tortor. Quisque ut condimentum orci. Sed condimentum tempor odio, eget mollis sem interdum in. Nulla vitae ultrices tellus, vel posuere mi. Maecenas id justo eget lorem egestas ornare. Nullam vitae dapibus quam. Nunc a nulla sit amet lectus aliquet semper ac vel sem.",
        links:"https://apply_link",
        img_url: "https://image_url",
        original_apply_link: "https://orginal_apply_link",
        date: "20-08-2021"
      });

  ngOnInit(): void {

    for (let index = 0; index < 10; index++) {
      this.posts.push(this.dummyPost);
    }

    console.log(this.posts);

  }


}
