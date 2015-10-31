import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';

export default class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.vc.html');

    context: any = {};
    
    login(): void {
        this.navigator.navigate(HomeViewControl);
    }
}

register.viewControl('login-vc', LoginViewControl);
