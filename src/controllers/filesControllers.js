const { fetchFileList, fetchFileData } = require("../services/filesService");

const getFileList = async (req, res) => {
  try {
    const files = await fetchFileList();
    res.status(200).json({ files });
  } catch (error) {
    res.status(500).json({ error: "Error fetching file list" });
  }
};

const getFilesData = async (req, res) => {
  try {
    const { fileName } = req.query;
    const data = await fetchFileData(fileName);

    if (fileName && data.length === 0) {
      return res
        .status(404)
        .json({ error: `File "${fileName}" not found or has no valid data` });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching file data" });
  }
};

module.exports = { getFileList, getFilesData };
