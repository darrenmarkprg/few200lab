import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MediaLibraryComponent } from './components/media-library/media-library.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaEntryComponent } from './components/media-entry/media-entry.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'media-library',
    component: MediaLibraryComponent,
    children: [
      {
        path: 'list',
        component: MediaListComponent
      },
      {
        path: 'entry',
        component: MediaEntryComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MediaLibraryComponent,
    MediaListComponent,
    MediaEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class MediaLibraryModule { }
