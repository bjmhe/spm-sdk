# @jd/spm-sdk

<!-- automd:badges bundlephobia license engine provider=npmx -->

[![npm version](https://npmx.dev/api/registry/badge/version/@jd/spm-sdk)](https://npmjs.com/package/@jd/spm-sdk)
[![npm downloads](https://npmx.dev/api/registry/badge/downloads/@jd/spm-sdk)](https://npm.chart.dev/@jd/spm-sdk)
[![bundle size](https://npmx.dev/api/registry/badge/size/@jd/spm-sdk)](https://bundlephobia.com/package/@jd/spm-sdk)
[![license](https://npmx.dev/api/registry/badge/license/@jd/spm-sdk)](https://github.com/bjmhe/template/blob/main/LICENSE)
[![engine](https://npmx.dev/api/registry/badge/engines/@jd/spm-sdk)](https://npmx.dev/api/registry/badge/engines/@jd/spm-sdk)

<!-- /automd -->

The SPM SDK for JD.com.

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

## Licenses

<!-- automd:contributors markupGoLogo anon author="bjmhe" license="MIT" -->

Published under the [MIT](https://github.com/bjmhe/template/blob/main/LICENSE) license.
Made by [@bjmhe](https://github.com/bjmhe) and [community](https://github.com/bjmhe/template/graphs/contributors) 💛
<br><br>
<a href="https://github.com/bjmhe/template/graphs/contributors">
<img src="https://contrib.rocks/image?repo=bjmhe/template&anon=true" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
