import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://cdn.shopify.com/s/files/1/0018/2052/4633/products/Blues_2019_Champs_Official_-_for_websites_800x.jpg?v=1560432246';
  image3 = 'https://solarsystem.nasa.gov/system/downloadable_items/2842_P36254.jpg';

  constructor() { }

  ngOnInit() {
  }

}