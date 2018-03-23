import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.age = 24;
    this.email = "aruchand@asu.edu";
    this.address = {
      street:'1005 E University Dr, Apt 201',
      city: 'Tempe',
      state: 'Arizona'
    }
    this.hobbies = ['Coding', 'Watching Movies', 'Listening to Music'];

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Ayush Ruchandani'
    this.hobbies.push('Playing Cricket');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street: string;
  city: string;
  state: string;
}


interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
