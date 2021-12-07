import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from './tags/tags.component';
import { GlobalComponent } from './global/global.component';

@NgModule({
  declarations: [HomeComponent, TagsComponent, GlobalComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [],
})
export class HomeModule {}
