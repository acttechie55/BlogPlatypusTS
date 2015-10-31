declare module models {
	interface IPost {
		title: string;
		author: string;
		createdAt?: Date;
		Content: string;
		objectId?: string;
		prettyDate?: string;
	}
	
	interface IResponse {
		results: Array<IPost>;
	}
}

declare module contexts {
	interface IHomeContext {
		/*When calling another interface that is in another
		module, you must call "models" and then the name of
		the interface*/
		posts: Array<models.IPost>;
	}
	//This is unnecessary and only needed if you needed to set
	//up a context description for something outside of a post
	interface ISendToParse {
		title: string;
		author: string;
		Content: string;
	}
}
