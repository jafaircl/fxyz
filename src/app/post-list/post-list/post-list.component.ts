import { Component, OnInit } from '@angular/core';

import { GraphCmsService } from '../../shared/services/graph-cms.service';
import { AllBlogPosts, BlogPost } from '../../shared/interfaces/graph-cms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: BlogPost[];

  constructor(private cms: GraphCmsService) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.cms.getAllPosts()
        .subscribe((data: AllBlogPosts) => this.posts = data.data.allBlogPosts );
  }

  private setGradient(color1: string, color2: string, index: number): string {
    let direction;
    if (index % 2 === 0) {
      direction = '45deg';
    } else {
      direction = '-45deg';
    }
    return `linear-gradient(${direction}, ${color1}, ${color2})`;
  }

}
