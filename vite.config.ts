import { lib } from "@bjmhe/viteplus-preset";

export default lib(
  {
    entry: "shallow",
  },
  {
    lint: {
      ignorePatterns: ["src/lib/weixinAppReport.js"],
    },
    fmt: {
      ignorePatterns: ["src/lib/weixinAppReport.js"],
    },
  },
);
