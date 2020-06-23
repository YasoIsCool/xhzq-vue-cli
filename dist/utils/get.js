"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = undefined;

var _downloadGitRepo = require("download-git-repo");

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const downloadLocal = exports.downloadLocal = async (projectName, projectType) => {
  let templatePath = "";
  switch (projectType) {
    case "子应用":
      templatePath = "";
      break;
    case "主应用":
      templatePath = "YasoIsCool/xhzq-template-master";
      break;
    default:
      templatePath = "YasoIsCool/xhzq-template-master";
  }

  return new Promise((resolve, reject) => {
    //projectName 为下载到的本地目录
    (0, _downloadGitRepo2.default)(templatePath, projectName, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}; /*
    * @Descripttion: 文件说明
    * @version: 0.0.1
    * @Author: gaojiapeng
    * @Date: 2020-06-22 10:35:29
    * @LastEditors: gaojiapeng
    * @LastEditTime: 2020-06-23 15:07:50
    */