class TextParser {
  parse(text) { return { text, wordCount: text.split(/\s+/).length }; }
  extractDates(text) { return (text.match(/\d{1,2}\/\d{1,2}\/\d{2,4}|\d{4}-\d{2}-\d{2}/g) || []); }
}
module.exports = { TextParser };
