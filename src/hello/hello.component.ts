import {IComponentOptions} from "angular";

class HelloComponentController {
    constructor() {
        console.log('in the constructor');
    }
}

export const HelloComponent: IComponentOptions = {
    template: `<div>Hello Component Works!!</div>`,
    controller: HelloComponentController
}

