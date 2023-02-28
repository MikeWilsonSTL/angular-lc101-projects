import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Literally the best photos ever taken";
  image1 =
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png";
  image2 =
    "https://toppng.com/uploads/preview/meme-man-front-surreal-meme-head-11562906495lzskbnjfzp.png";
  image3 =
    "https://toppng.com/uploads/preview/report-abuse-meme-man-transparent-background-11563029346mjjzl6edyd.png";

  constructor() {}

  ngOnInit() {}
}
