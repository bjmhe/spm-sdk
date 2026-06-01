# @jd/spm-sdk

The SPM SDK for JD.com.

| 平台       | 支持程度 | 测试验证 | 投入生产环境 |
| ---------- | -------- | -------- | ------------ |
| Web        | ✅       | ✅       | ✅           |
| H5         | ✅       | ✅       | ⚠️           |
| 微信小程序 | ✅       | ❌       | ❌           |
| 京东小程序 | ✅       | ❌       | ❌           |
| JDRN       | ✅       | ❌       | ❌           |

## Install

<!-- automd:pm-install dev auto=false -->

```sh
# npm
npm install -D @jd/spm-sdk

# yarn
yarn add -D @jd/spm-sdk

# pnpm
pnpm add -D @jd/spm-sdk

# bun
bun install -D @jd/spm-sdk

# deno
deno install --dev npm:@jd/spm-sdk

# vp
vp install -D @jd/spm-sdk
```

<!-- /automd -->

## Usage

<!-- automd:file src="./examples/sdk-h5.ts" code lang="ts" -->

```ts [sdk-h5.ts]
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
  scm: ["1"],
  biz_type: "click",
});

// 曝光上报
SpmH5SDK.ep({
  // @ts-ignore
  target: element,
  spm: "a.b.c.d",
  scm: ["1"],
  biz_type: "exposure",
});
```

<!-- /automd -->

<!-- automd:file src="./examples/sdk-jdmp.ts" code lang="ts" -->

```ts [sdk-jdmp.ts]
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
```

<!-- /automd -->

<!-- automd:file src="./examples/sdk-pc.ts" code lang="ts" -->

```ts [sdk-pc.ts]
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
```

<!-- /automd -->

<!-- automd:file src="./examples/sdk-wxmp.ts" code lang="ts" -->

```ts [sdk-wxmp.ts]
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
```

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
