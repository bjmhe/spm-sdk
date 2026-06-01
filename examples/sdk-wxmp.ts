import { SpmWXMPSDK } from "../src";

// 初始化
SpmWXMPSDK.install({
  siteId: "your-site-id",
  appid: "your-appid",
  account: "your-account",
  openid: "your-openid",
  unionid: "your-unionid",
});

// PV 上报
SpmWXMPSDK.pv({
  spm: "a.b.c.d",
  page_id: "home",
});

// 点击上报
SpmWXMPSDK.ck({
  spm: "a.b.c.d",
  biz_type: "click",
});

// 曝光上报
SpmWXMPSDK.ep({
  spm: "a.b.c.d",
  biz_type: "exposure",
});
