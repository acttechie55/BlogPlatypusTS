//This is the create-a-blog page//
import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class CreateViewControl extends BaseViewControl {
    templateString: string = require('./create.vc.html');

    context: models.IPost = {
        title: '',
        author: '',
        Content: ''
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    create(): void {
        var sendToParse: models.IPost = {
            title: this.context.title,
            author: this.context.author,
            Content: this.context.Content
        }
        this.postRepo.submitPost(sendToParse)
        .then((success) => {
            this.navigator.navigate(HomeViewControl);
        });
    }
}

register.viewControl('create-vc', CreateViewControl, [PostRepository]);
