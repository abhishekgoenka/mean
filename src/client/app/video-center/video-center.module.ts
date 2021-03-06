import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCenterComponent } from './video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';
import { VideoAddComponent } from './video-add/video-add.component';



@NgModule({
  declarations: [
    VideoDetailComponent,
    VideoListComponent,
    VideoCenterComponent,
    SafePipe,
    VideoAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class VideoCenterModule { }
