import { Base } from "./base";

export class Action extends Base{
    async clickElement(selector,opts={}){
        await this.page.locator(selector).click(opts);
    }

    async fillElement(selector,text,opts={}){
        await this.page.locator(selector).fill(text);
    }

    async scrollToElement(selector, opts={}){
        await this.page.locator(selector).scrollIntoViewIfNeeded(opts);
    }
}