import { lib } from "@bjmhe/viteplus-preset";

export default lib(
  {
    entry: "shallow"
  },
  {
    fmt: {
      ignorePatterns: ["src/sdk-wxmp/weixinAppReport.js"],
    },
  },
);
