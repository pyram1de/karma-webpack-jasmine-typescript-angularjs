import {IAngularStatic} from "angular";


declare var angular: IAngularStatic;

export class MyAppModule {
    private static instance: MyAppModule;
    private readonly _app = null;
    constructor() {
        this._app = angular.module('myApp', ['ngRoute'],
            ['$routeProvider', '$locationProvider', ($routeProvider, location) => {
            console.log('in the config function');
                $routeProvider.when("/", {
                    template: '<hello-world></hello-world>'
                })
                    .otherwise({
                        redirectTo: "/"
                    })
            }]);
    }

    get app() : IAngularStatic {
        return this._app;
    }

    public static getInstance(): any {
        if(!MyAppModule.instance) {
            MyAppModule.instance = new MyAppModule();
        }

        return MyAppModule.instance;
    }

}