import { Action } from "./action"
const pom={
    tabletsPageLink:`a:has-text("Tablets")`
}


export class NavigationController extends Action{
    async navigateToTabletPage(){
        await this.clickElement(pom.tabletsPageLink);
    }
}