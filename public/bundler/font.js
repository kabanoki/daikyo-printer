const { exec } = require('child_process');

const getFontList = async () => {
  return await new Promise((resolve, reject) => {
    const command = 'powershell "Get-ChildItem -Path \'C:\\Windows\\Fonts\\\' -Filter *.ttf | Select-Object -Property FullName"';
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = { getFontList };