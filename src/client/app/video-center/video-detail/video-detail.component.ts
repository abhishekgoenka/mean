import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  // @Input() video: Video;
  
  @Output() videoUpdated = new EventEmitter<Video>()
  @Output() videoDeleted = new EventEmitter<string>()
  editMode = false;
  private _video: Video;

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  get video() {
    return this._video;
  }
  set video(v: Video) {
    this._video = v;
    this.editMode = false;
  }

  /**
   * sets edit mode
   * @param mode editMode
   */
  setEditMode(mode: boolean): void {
    this.editMode = mode
  }

  /**
   * save updated video
   */
  save(): void {
    this.videoUpdated.emit(this.video);
  }

  /**
   * deleted video
   */
  deleteVideo(): void {
    this.videoDeleted.emit(this.video._id);
  }

}
