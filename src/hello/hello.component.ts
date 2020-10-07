import {IComponentOptions} from "angular";

export class HelloComponentController {
    constructor() {
        console.log('in the constructor');
    }
}

export const HelloComponent: IComponentOptions = {
    template: `<div>Hello Component Works!!</div>`,
    controller: HelloComponentController
}

