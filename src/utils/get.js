/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:35:29
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 15:23:02
 */
import downloadGit from "download-git-repo";

export const downloadLocal = async (projectName, projectType) => {
  let templatePath = "";
  switch (projectType) {
    case "子应用":
      templatePath = "YasoIsCool/xhzq-template-subapp";
      break;
    case "主应用":
      templatePath = "YasoIsCool/xhzq-template-master";
      break;
    default:
      templatePath = "YasoIsCool/xhzq-template-subapp";
  }

  return new Promise((resolve, reject) => {
    //projectName 为下载到的本地目录
    downloadGit(templatePath, projectName, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
