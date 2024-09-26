import { fileTypeFromFile } from "file-type";

const checkFile = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mime = await fileTypeFromFile(path);      
      if (mime?.mime !== undefined) {
        resolve({ status: 200, message: "File Allowed" });
      } else {
        reject({ status: 415, message: "Unsupport Media type" });
      }
    } catch (error) {
      throw new Error("Error");
      
    }
  });
};

export default { checkFile };
