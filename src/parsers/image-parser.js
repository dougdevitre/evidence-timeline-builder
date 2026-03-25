class ImageParser {
  async ocr(imageBuffer) { return { text: '[OCR extracted text]', confidence: 0.85 }; }
}
module.exports = { ImageParser };
