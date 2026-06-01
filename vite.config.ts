import { lib } from "@bjmhe/viteplus-preset";

export default lib(
  {
    entry: "shallow",
  },
  {
    pack: {
      format: {
        esm: {
          target: ["es2020"],
        },
      },
    },
    lint: {
      ignorePatterns: ["src/lib/weixinAppReport.js"],
    },
    fmt: {
      ignorePatterns: ["src/lib/weixinAppReport.js"],
    },
  },
);
