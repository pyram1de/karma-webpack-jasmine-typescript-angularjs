import {IAngularStatic} from "angular";

declare var angular: IAngularStatic;
require('./main');

angular.module('test', [require('angular-mocks')])