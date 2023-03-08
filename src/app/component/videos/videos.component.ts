import { Component,ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from 'ngx-youtube-player';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  player!: YT.Player;
  id: string = 'qDuKsiwS5xw';
  videos = [
    { id: 'qDuKsiwS5xw', title: 'Video 1' },
    { id: 'mRf3-JkwqfU', title: 'Video 2' },
    { id: 'XGwaHb-qyzM', title: 'Video 3' },
    { id: 'E1ZVSFyf4JE', title: 'Video 4' }
  ];
  currentVideoId!: string;
  savePlayer(player:any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event:any) {
    console.log('player state', event.data);
  }

  loadVideo(videoId: string) {
    this.currentVideoId = videoId;
    this.player.loadVideoById(videoId);
  }
  onPlayerReady(event: any) {
    this.player = event.target;
  }
}
