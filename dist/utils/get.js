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
      templatePath = "YasoIsCool/template-master";
      break;
    default:
      templatePath = "YasoIsCool/template-master";
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
};