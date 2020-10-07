import 'angular';
import 'angular-route';

import {MyAppModule} from "./my-app/myApp.module";
import {HelloComponent} from "./hello/hello.component";
import {IAngularStatic} from "angular";
import {GoodbyeComponent} from "./goodbye/goodbye.component";
declare var angular: IAngularStatic;

let app = MyAppModule.getInstance().app;


app.component('helloWorld', HelloComponent);
app.component('goodbyeComponent', GoodbyeComponent);

let myApp = angular.bootstrap(document, ['myApp']);
