export const WECHAT_CONFIG = {
  //set your oauth redirect url, defaults to localhost
  "wechatRedirectUrl": "https://cdn.mendix-dev.kyleliu.top/link/wechat",
  //"wechatToken": "wechat_token", //not necessary required
  "appId": "wxc8aa1c6a5d1ec09e",
  "appSecret": "b61c092085ae1603ce0989d44a71f770",
  card: true, //enable cards
  payment: true, //enable payment support
  merchantId: '', //
  paymentSandBox: true, //dev env
  paymentKey: '', //API key to gen payment sign
  paymentCertificatePfx: fs.readFileSync(path.join(process.cwd(), 'cert/apiclient_cert.p12')),
  //default payment notify url
  paymentNotifyUrl: `https://cdn.mendix-dev.kyleliu.top/link/callback`,
  //mini program config
  "miniProgram": {
    "appId": "wx95159c763dbf6727",
    "appSecret": "a2c975df21a79e3c5b6038d5bada7dc3",
  }
}