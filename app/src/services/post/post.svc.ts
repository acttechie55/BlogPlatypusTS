import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {
	
	getPosts(): async.IThenable<Array<models.IPost>> {
		return this.http.json<models.IResponse>({
			method: 'GET',
			headers: this.reqHeaders,
			url: this.host
		}).then((success) => {
			return <Array<models.IPost>>success.response.results;
		});
	}
	
	submitPost(post: models.IPost): async.IThenable<any> {
		return this.http.json<models.IResponse>({
			method: 'POST',
			headers: this.reqHeaders,
			url:this.host,
			data: post
		}).then((success) => {
			console.log(success);
			return <any>success.response.results;
		});
	}
}

register.injectable('post-vc', PostService);
