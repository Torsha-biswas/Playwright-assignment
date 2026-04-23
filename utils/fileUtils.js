const fs = require('fs');
const path = require('path');

class FileUtils {
  static saveBookDetails(data) {

    const dir = path.join(__dirname, '../test-data');

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, 'bookDetails.txt');

    const content =
      `Title: ${data.title}\n` +
      `Author: ${data.author}\n` +
      `Publisher: ${data.publisher}\n`;

    fs.writeFileSync(filePath, content, 'utf8');
  }
}

module.exports = FileUtils;