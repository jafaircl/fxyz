import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AllBlogPosts } from '../interfaces/graph-cms';
import { GRAPH_CMS_URL } from '../../../private/urls';

@Injectable()
export class GraphCmsService {

  protected static SInit = (() => {
    GraphCmsService.prototype.url = GRAPH_CMS_URL;
  })();

  url: string;

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<Object> {
    const body = {
      query: `
        query {
          allBlogPosts {
            postColor1
            postColor2
            postDescription
            postSlug
            postTitle
          }
        }
      `
    };
    return this.http.post<AllBlogPosts>(this.url, body);
  }
}
