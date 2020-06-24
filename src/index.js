/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:35:29
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 15:22:40
 */

import program from "commander";
import { VERSION } from "./utils/constants";
import apply from "./apply";
import chalk from "chalk";

let actionMap = {
  init: {
    description: "从模板生成新项目。",
    usages: ["鑫海智桥前端初始化项目"],
    alias: "i"
  }
};

// 添加 init / config 命令
Object.keys(actionMap).forEach(action => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias) //别名
    .action(() => {
      switch (action) {
        case "config":
          //配置
          apply(action, ...process.argv.slice(3));
          break;
        case "init":
          apply(action, ...process.argv.slice(3));
          break;
        default:
          break;
      }
    });
});

function help() {
  console.log("\r\nUsage:");
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log("  - " + usage);
    });
  });
  console.log("\r");
}
program.usage("<command> [options]");
// xhzq -h
program.on("-h", help);
program.on("--help", help);
// xhzq -V   VERSION 为 package.json 中的版本号
program.version(VERSION, "-V --version").parse(process.argv);

// xhzq 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green);
}
function make_green(txt) {
  return chalk.green(txt);
}
