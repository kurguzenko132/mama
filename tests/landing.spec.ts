import { test, expect } from "@playwright/test";
test("landing renders primary content",async({page})=>{await page.goto("/");await expect(page.getByRole("heading",{name:/Профессиональная помощь подолога/i})).toBeVisible();await expect(page.getByRole("link",{name:/Записаться на приём/i}).first()).toBeVisible();});
