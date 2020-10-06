import 'angular';
import 'angular-route';

import {MyAppModule} from "./my-app/myApp.module";
import {HelloComponent} from "./hello/hello.component";
import {IAngularStatic} from "angular";
declare var angular: IAngularStatic;

let app = MyAppModule.getInstance().app;

console.log('app', app);

app.component('helloWorld', HelloComponent);

angular.bootstrap(document, ['myApp']);

