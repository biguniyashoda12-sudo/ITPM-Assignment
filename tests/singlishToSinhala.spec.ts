import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama vathura bonavaa');
  await page.getByText('මම වතුර බොනවා').click();
});


test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata mahansi nisaa mama nidhagaththaa');
  await page.getByText('මට මහන්සි නිසා මම නිදගත්තා').click();
});

test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api pusthakaalayata yanavaa haebaeyi ida thiyevidha dhannee nahae');
  await page.getByText('අපි පුස්තකාලයට යනවා හැබැයි ඉඩ තියෙවිද දන්නේ නැහැ').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta palli yanavaa oyath enavadha');
  await page.getByText('මම හෙට පල්ලි යනවා ඔයත් එනවද').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('paeththakata velaa inna');
  await page.getByText('පැත්තකට වෙලා ඉන්න').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('siyalu paethum itu vena suba udhaeesanak veaavaa');
  await page.getByText('සියලු පැතුම් ඉටු වෙන සුබ උදෑසනක් වේවා').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('anee mee vathura eka bonnakoo');
  await page.getByText('අනේ මේ වතුර එක බොන්නකෝ').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('harii mama bonnam');
  await page.getByText('හරී මම බොන්නම්').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakara obee guvanvidhuliyee shabdhaya adu karaganna puluvandha');
  await page.getByText('කරුනාකර ඔබේ ගුවන්විදුලියේ ශබ්දය අඩු කරගන්න පුලුවන්ද').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha ooka karala ivara karapan');
  await page.getByText('අද ඕක කරල ඉවර කරපන්').click();
});

test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee bada ridhenavaa');
  await page.getByText('මගේ බඩ රිදෙනවා').click();
});

test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('machan mata adha lecture enna venne naee wedding ekakata yanavaa machan mata notes tika evanavadha');
  await page.getByText('මචන් මට අද lecture එන්න වෙන්නෙ නැ wedding එකකට යනවා මචන් මට notes ටික එවනවද').click();
});

test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee baenkuvata giyaa');
  await page.getByText('මම ඊයේ බැන්කුවට ගියා').click();
});

test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama dhaen panthiya athugaanavaa');
  await page.getByText('මම දැන් පන්තිය අතුගානවා').click();
});

test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ooma siini kaeema kanna epaa leda veyi');
  await page.getByText('ඕම සීනි කෑම කන්න එපා ලෙඩ වෙයි').click();
});

test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('heta api aluth gedharakata yanavaa');
  await page.getByText('හෙට අපි අලුත් ගෙදරකට යනවා').click();
});

test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata mee kaeema kanna baee');
  await page.getByText('මට මේ කෑම කන්න බෑ').click();
});

test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama rasa kaeema ekak haedhuvaa oyath enavadha kanna');
  await page.getByText('මම රස කෑම එකක් හැදුවා ඔයත් එනවද කන්න').click();
});

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api havasata udahaa gedhara yanna innee oyath enavadha');
  await page.getByText('අපි හවසට උඩහා ගෙදර යන්න ඉන්නේ ඔයත් එනවද').click();
});

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo uba maru ooii mama hithuvee naee uba mata mechchara loku udhavvak karalaa dheyi kiyalaa adoo thanks hodhee');
  await page.getByText('අඩෝ උබ මරු ඕඊ මම හිතුවේ නෑ උබ මට මෙච්චර ලොකු උදව්වක් කරලා දෙයි කියලා අඩෝ thanks හොදේ').click();
});

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee godak siithala nisaa mama ikmanata vaeda tika ivara karaa');
  await page.getByText('අද උදේ ගොඩක් සීතල නිසා මම ඉක්මනට වැඩ ටික ඉවර කරා').click();
});

test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaagee birthday eka giya sathiyee thibunaa needha mama facebook ekee dhaekkaa mata wish karanna amathaka unaa sorry machan');
  await page.getByText('ඔයාගේ birthday එක ගිය සතියේ තිබුනා නේද මම facebook එකේ දැක්කා මට wish කරන්න අමතක උනා sorry මචන්').click();
});

test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('2026 janavaari 10 veni dhina maathara pradheeshayata hadhisiyeema vidhuliya aena hitiima heethuven minisunta vaeda katayuthu kara gaeniimata baadhaa aethi viya. emanisaa vidhuli bala mandalaya visin vidhuliya yathaa thaththvayata path kiriimata vehesak dhaeruu athara dhahaval 12 pamana vana vita yalith maathara pradheeshayata vidhuliya laebuni.');
  await page.getByText('2026 ජනවාරි 10 වෙනි දින මාතර ප්‍රදේශයට හදිසියේම විදුලිය ඇන හිටීම හේතුවෙන් මිනිසුන්ට වැඩ කටයුතු කර ගැනීමට බාදා ඇති විය . එමනිසා විදුලි බල මන්ඩලය විසින් විදුලිය යතා තත්ත්වයට පත් කිරීමට වෙහෙසක් දැරූ අතර දහවල් 12 පමන වන විට යලිත් මාතර ප්‍රදේශයට විදුලි බලය ලැබුනි.').click();
});

test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama udhaeesanama avadhi vii paadam kiriimata udhaeesana aahaaraya gaeniimen pasu avashya poth tikath aragena suudhaanam unaa . dhahaval kaalaya vana vita paadam katayuthu avasan vuu nisaa mama yaaluvekgee gedhara giyaa yaaluvath ekka sangiitha prasngayata giyaa. ena gaman api raeeta kaalaa yaaluvagee gedhara giyaa.');
  await page.getByText('මම උදෑසනම අවදි වී පාඩම් කිරීමට උදෑසන ආහාරය ගැනීමෙන් පසු අවශ්ය පොත් ටිකත් අරගෙන සූදානම් උනා . දහවල් කාලය වන විට පාඩම් කටයුතු අවසන් වූ නිසා මම යාලුවෙක්ගේ ගෙදර ගියා යාලුවත් එක්ක සන්ගීත ප්‍රස්න්ගයට ගියා. එන ගමන් අපි රෑට කාලා යාලුවගේ ගෙදර ගියා.').click();
});

test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama waththa pirisidhu karanavaa');
  await page.getByText('මම වත්ත පිරිසිදු කරනවා').click();
});

test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamakadeetayanavaabaduganna');
  await page.getByText('මම කඩේට යනවා බඩු ගන්න').click();
});

test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama nivasa aluthvaediyaa karanavaa!??');
  await page.getByText('මම නිවස අලුත්වැඩියා කරනවා').click();
});

test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha naetum@ panthi patangannavaa');
  await page.getByText('අද නැටුම් පන්ති පටන්ගන්නවා').click();
});

test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('looka ruu raejina tharagaavaliyen sri lanka naamaya baebaluni');
  await page.getByText('ලෝක රූ රැජින තරගාවලියෙන් ශ්‍රී ලන්කා නාමය බැබලුනි').click();
});

test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama aluthin kOoppAyak ganna yanavaa');
  await page.getByText('මම අලුතින් කෝප්පයක් ගන්න යනවා').click();
});

test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama arayata msg dhaenmata reply naeenee');
  await page.getByText('මම අරයට message දැන්මට reply නෑනේ').click();
});

test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee yaaluvata una haedhilaa eya8ata beheth ganna yanavaa');
  await page.getByText('මගේ යාලුවට උන හැදිලා එයාට බෙහෙත් ගන්න යනවා').click();
});

test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha vaedata giyee naee because i am sick');
  await page.getByText('අද වැඩට ගියේ නෑ මම ලෙඩ උනු නිසා').click();
});

test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta magee aththammalaagee gedhara giyaa');
  await page.getByText('මම හෙට මගේ අත්තම්මලාගේ ගෙදර යනවා').click();
});

test('Pos_UI_01: Real-time Update Behavior', async ({ page }) => {
    const inputBox = page.locator('textarea').nth(0);
    await inputBox.type('mama pansal yanavaa', { delay: 100 });
    await expect(page.locator('body')).toContainText('මම පන්සල් යනවා');
    
  });
