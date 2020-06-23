import downloadGit from "download-git-repo";

export const downloadLocal = async (projectName, projectType) => {
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
    downloadGit(templatePath, projectName, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
