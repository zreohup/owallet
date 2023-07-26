import { by, device, element, expect } from 'detox';

describe('Test suite 1', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } });
  });

  it('should have welcome screen', async () => {
    // await expect(element(by.id("welcome_id"))).toBeVisible();;
    await element(by.id('welcome_id')).swipe('left');
    await element(by.id('welcome_id')).swipe('left');
    await element(by.id('get_started_id')).tap();
    await element(by.id('import_wallet')).tap();
    await element(by.id('input_mnemonic')).typeText('maze poverty pioneer wall borrow copper subject adult save raccoon angle general');
    await element(by.id('user_name')).typeText('toan');
    await element(by.id('new_pass_ID')).replaceText('ToiTen@1234');
    await element(by.id('confirm_pass_ID')).replaceText('ToiTen@1234');
    await element(by.id('next_recover')).tap();
    await element(by.id('done_owallet')).tap();
    // await element(by.id('onboard')).swipe('right');
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
});
