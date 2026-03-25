class PDFParser {
  async parse(buffer) { return { text: '[Extracted PDF text]', pages: 1 }; }
  extractDates(text) { const dates = text.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g) || []; return dates; }
}
module.exports = { PDFParser };
