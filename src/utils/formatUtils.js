const formatFileData = (csvData, fileName) => {
  const lines = csvData.split("\n").slice(1);

  const formattedLines = lines
    .map((line) => {
      const [file, text, number, hex] = line.split(",");

      if (file && text && number && hex) {
        return { text, number: parseInt(number, 10), hex };
      }

      return null;
    })
    .filter((line) => line !== null);

  if (formattedLines.length > 0) {
    return { file: fileName, lines: formattedLines };
  }

  return null;
};

module.exports = { formatFileData };
