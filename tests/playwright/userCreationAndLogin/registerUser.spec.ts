import { test } from "playwright/test";
import { createUser, cleanUpUser } from "../scripts/createUser";

test.describe('User registeration', ()=>{
    test.beforeAll(async()=>{
     await createUser();
    })
    test('verify that user can register with the details provided', async({page})=>{
    await page.goto('/ui');
    })

    test.afterAll(async()=>{
        await cleanUpUser();
    })
})
