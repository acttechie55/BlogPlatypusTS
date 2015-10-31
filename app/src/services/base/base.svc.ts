import {async, Utils} from 'platypus';

export default class BaseService {
  //this is basically saying to run this WHILE (or asynchroniously) other code is loading//
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };
//this just calls the above code//
	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;
//Here, enter your API string, whether it is Azure or Parse??//
    host: string = 'https://api.parse.com/1/classes/PlatBlog';
    reqHeaders: any = {
				"X-Parse-Application-Id": "TsLHqTChMOhoOf8Cy4c1FKyvA7GH2TZnql9o5ZBX",
				"X-Parse-REST-API-Key": "MLkNeIT3hMxAICq1DSmAMnOwjfHI8opRmCDBzMQB"
	};
}
