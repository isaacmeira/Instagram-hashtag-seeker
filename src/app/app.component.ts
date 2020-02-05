import { Component,OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  instaData;
  faHeart = faHeart;


  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getData();

  }

  getData(){
    this.apiService.getData().subscribe((data)=>{
      console.log(this.instaData);
      this.instaData = data;
      this.instaData = this.instaData.graphql.hashtag.edge_hashtag_to_media.edges
      this.apiService.data = this.instaData;
      setTimeout(()=>{
        this.getData();
      },1800000)
    });
  }

}
