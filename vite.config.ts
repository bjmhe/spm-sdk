import { lib } from "@bjmhe/viteplus-preset";

export default lib(
  {},
  {
    fmt: {
      ignorePatterns: ["src/sdk-wxmp/weixinAppReport.js"],
    },
  },
);
