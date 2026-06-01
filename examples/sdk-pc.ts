import { SpmPCSDK } from "../src";

// 初始化
SpmPCSDK.install({
  account: "your-account",
  domain: "your-domain",
});

// PV 上报
SpmPCSDK.pv({
  spm: "a.b.c.d",
});

// 点击上报
SpmPCSDK.ck({
  spm: "a.b.c.d",
  biz_type: "click",
});

// 曝光上报
SpmPCSDK.ep({
  spm: "a.b.c.d",
  biz_type: "exposure",
});

// 系统级埋点
SpmPCSDK.sys();
