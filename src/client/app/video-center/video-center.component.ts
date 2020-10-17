import { Component, OnInit } from '@angular/core';
import { Video } from './models/video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss']
})
export class VideoCenterComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(v => this.videos = v);
  }

  /**
   * this event is fired when video is selected
   * @param video Video
   */
  onVideoSelect(video: Video): void {
    this.selectedVideo = video;
  }
}
