import { HelloComponent } from "./hello.component";
import {IAngularStatic} from "angular";
declare var angular: IAngularStatic;
const template = HelloComponent.template;



describe("A suite", () => {

    beforeEach(() => {
        angular
            .module('hello.component', [])
            .component('helloWorld', HelloComponent);
        angular.mock.module('myApp');
    });

    it('Component should exist',
        angular.mock.inject(($componentController: any) => {
            const component = $componentController('helloWorld', {}, {});
            expect(component)
                .toBeDefined();
        }),
    );
});