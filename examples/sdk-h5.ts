import { SpmH5SDK } from "../src";

// 初始化
SpmH5SDK.install({
  siteId: "your-site-id",
  account: "your-account",
});

// PV 上报
SpmH5SDK.pv({
  spm: "a.b.c.d",
  page_id: "home",
});

// 点击上报
SpmH5SDK.ck({
  // @ts-ignore
  target: event.target as HTMLElement,
  spm: "a.b.c.d",
  scm: "1.1.1.1",
  biz_type: "click",
});

// 曝光上报
SpmH5SDK.ep({
  // @ts-ignore
  target: element,
  spm: "a.b.c.d",
  scm: "1.1.1.1",
  biz_type: "exposure",
});
