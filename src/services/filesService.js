const axios = require("axios");
const { formatFileData } = require("../utils/formatUtils");

const API_URL = "https://echo-serv.tbxnet.com/v1/secret";
const API_KEY = "Bearer aSuperSecretKey";

const fetchFileList = async () => {
  const response = await axios.get(`${API_URL}/files`, {
    headers: { Authorization: API_KEY },
  });
  return response.data.files;
};

const fetchFileData = async (fileName) => {
  const files = fileName ? [fileName] : await fetchFileList();
  const formattedFiles = [];

  for (const file of files) {
    try {
      const response = await axios.get(`${API_URL}/file/${file}`, {
        headers: { Authorization: API_KEY },
      });

      const formattedData = formatFileData(response.data, file);
      if (formattedData) {
        formattedFiles.push(formattedData);
      }
    } catch (error) {
      console.error(`Error fetching file: ${file}`, error.message);
    }
  }

  return formattedFiles;
};

module.exports = { fetchFileList, fetchFileData };
