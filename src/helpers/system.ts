import { exec } from "child_process";

export const command = (...commandValue: any) => {
  return new Promise((resolve, reject) => {
    exec(commandValue.join(" "), (error, stdout, stderr) => {
      if (error || stderr) {
        reject(error || stderr);
        return;
      }

      resolve(stdout);
    });
  });
};
