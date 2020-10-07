import { GoodbyeComponent } from "./goodbye.component";
import {IAngularStatic} from "angular";
declare var angular: IAngularStatic;
const template = GoodbyeComponent.template;

describe("A suite", () => {

    beforeEach(() => {
        angular
            .module('goodbye.component', [])
            .component('goodbyeComponent', GoodbyeComponent);
        angular.mock.module('myApp');
    });

    it('Component should exist',
        angular.mock.inject(($componentController: any) => {
            const component = $componentController('goodbyeComponent', {}, {});
            expect(component)
                .toBeDefined();
        }),
    );
});