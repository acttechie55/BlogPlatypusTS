import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {

    constructor(private postService: PostService) {
        super();
    }

    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.postService.getPosts().then((posts) => {
            posts.forEach((post) => {
                // Dates from a service are not translate back into a JS Date object. They are a string.
                // Before we can work with them, we must convert them into a Date object.
                // We store the original (string) value of post.createdAt in an ANY variable.
                var datestring: any = post.createdAt;
                
                // We then reassign a new Date object created from that string representation of a date.
                post.createdAt = new Date(datestring);
                // Now, post.createdAt is a JavaScript Date object instead of a string.
                post.prettyDate = post.createdAt.toDateString();
            });
            return posts;
        });
}
    submitPost(post: models.IPost): async.IThenable<any> {
        return this.postService.submitPost(post);
    }      
}


register.injectable('post-repo', PostRepository, [PostService]);
