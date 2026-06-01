import { SpmJDMPSDK } from "../src";

// PV 上报
SpmJDMPSDK.pv({
  spm: "a.b.c.d",
  pageId: "home",
  pageName: "首页",
});

// 点击上报
SpmJDMPSDK.ck({
  spm: "a.b.c.d",
  eventId: "btn_click",
});

// 曝光上报
SpmJDMPSDK.ep({
  spm: "a.b.c.d",
  eid: "banner_exposure",
});
