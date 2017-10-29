import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import { GraphCmsService } from '../../shared/services/graph-cms.service';
import { AllBlogPosts, BlogPost } from '../../shared/interfaces/graph-cms';
import { TextBalancerService } from '../../shared/services/text-balancer.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: BlogPost[];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.balanceText();
  }

  constructor(private cms: GraphCmsService, private balancer: TextBalancerService, private element: ElementRef) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.cms.getAllPosts()
        .subscribe((data: AllBlogPosts) => {
          this.posts = data.data.allBlogPosts;
          this.balanceText();
        });
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

  private balanceText() {
      this.element.nativeElement.querySelectorAll('.balance-text').forEach(element => {
        this.balancer.balanceText(element);
      });
  }

}
