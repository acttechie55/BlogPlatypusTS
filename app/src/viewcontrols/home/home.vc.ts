//This is the controller for my homepage//
import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CreateViewControl from '../create/create.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: contexts.IHomeContext = {
       posts: []
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    navigatedTo() {
        this.postRepo.getPosts().then((parseposts) => {
            for (var index = 0; index < parseposts.length; index++) {
                var element = parseposts[index];
                this.context.posts.push(element);
            }
        });
    }
    showCreate() {}
    home(): void {

        //this needs to navigate to Create Page//
        this.navigator.navigate(CreateViewControl);
    }
    
}

register.viewControl('home-vc', HomeViewControl,[PostRepository]);
