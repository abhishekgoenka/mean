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
    this.videoService.getVideos().subscribe(v => {
      this.videos = v
      if (this.videos.length > 0) {
        this.selectedVideo = { ...this.videos[0] };
      }
    });
  }

  /**
   * this event is fired when video is selected
   * @param video Video
   */
  onVideoSelect(video: Video): void {
    this.selectedVideo = { ...video };
  }

  /**
   * this event is fired when new video is added
   * @param video Video
   */
  onVideoAdded(video: Video): void {
    this.videoService.addVideo(video).subscribe(v => {
      this.selectedVideo = {...v}
      this.videos.push(v);
    });
  }

  /**
   * this event is fired when new video is updated
   * @param video Video
   */
  onVideoUpdated(video: Video): void {
    this.videoService.updateVideo(video._id, video).subscribe(v => {
      
      // modify the entry in the list
      this.videos.forEach(vid => {
        if (vid._id === v._id) {
          vid.title = v.title;
          vid.url = v.url;
          vid.description = v.description;
        }
      })
      this.selectedVideo = {...v}
    });
  }

  /**
   * this event is fire when video is deleted
   * @param id video ID
   */
  onVideoDeleted(id: string): void {
    this.videoService.deleteVideo(id).subscribe(v => {
      this.videos = this.videos.filter(e => e._id !== v._id);
      if (this.videos.length > 0) {
        this.selectedVideo = this.videos[0];
      }
    })
  }

  /**
   * add video event. Set selected video to NULL
   */
  addVideo(): void {
    this.selectedVideo = null;
  }
}
