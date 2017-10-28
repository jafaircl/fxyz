export interface BlogPost {
    postColor1: string;
    postColor2: string;
    postDescription: string;
    postImage: string;
    postTitle: string;
}

export interface AllBlogPosts {
    data: {
        allBlogPosts: BlogPost[];
    };
}
