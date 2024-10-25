import { Base } from "./base";

export class Action extends Base{
    async clickElement(selector,opts={}){
        await this.page.locator(selector).click(opts);
    }
}