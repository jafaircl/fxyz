import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { MetaTags } from '../interfaces/meta-tags';

@Injectable()
export class MetaTagService {

  constructor(private meta: Meta, private title: Title) { }

  public setTags(tags: MetaTags) {
    if (tags.title)       { this.setTitle(tags.title); }
    if (tags.description) { this.setDescription(tags.description); }
    if (tags.image)       { this.setImage(tags.image); }
  }

  private setTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ itemprop: 'name', content: title });
  }

  private setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ itemprop: 'description', content: description });
  }

  private setImage(url: string) {
    this.meta.updateTag({ property: 'og:image', content: url });
    this.meta.updateTag({ name: 'twitter:image:src', content: url });
    this.meta.updateTag({ itemprop: 'image', content: url });
  }
}
