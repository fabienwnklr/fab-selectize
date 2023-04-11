import { IS_MAC } from './constants'
import './styles/selectize.default.scss'

declare global {
    interface Window {
        Selectize: typeof Selectize

    }
}

export class Selectize {
    constructor(options: any) {
        console.log(options, IS_MAC);
    }

    init() {
        console.log("init")
    }
}

window.Selectize = Selectize;