import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';

import { ArticleComponent } from './component/articles-list/article/article.component';
import { ArticlesListComponent } from './component/articles-list/articles-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { CommentComponent } from './component/article-detail/comment/comment.component';
import { CommentItemComponent } from './component/article-detail/comment-item/comment-item.component';
import { CommentListComponent } from './component/article-detail/comment-list/comment-list.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent,
    CommentComponent,
    ArticleComponent,
    CommentItemComponent,
    CommentListComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    CommonModule,
    ArticlesListComponent,
    ArticleDetailComponent,
    CommentComponent,
    ArticleComponent,
  ],
})
export class SharedModule {}
