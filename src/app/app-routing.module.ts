import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoTagDetailContainerComponent } from './components/photo-tag-detail-container/photo-tag-detail-container.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: 'tags/:name', component: PhotoTagDetailContainerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
