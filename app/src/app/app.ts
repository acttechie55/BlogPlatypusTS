/* This is the router */
import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import LoginViewControl from '../viewcontrols/login/login.vc';
import CreateViewControl from '../viewcontrols/create/create.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '/', view: LoginViewControl },
            { pattern: '/home', view: HomeViewControl },
            { pattern: '/create', view: CreateViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
