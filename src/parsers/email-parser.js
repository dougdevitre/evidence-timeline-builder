class EmailParser {
  parse(rawEmail) { return { from: '', to: '', subject: '', date: '', body: rawEmail }; }
  extractMetadata(parsed) { return { from: parsed.from, date: parsed.date, subject: parsed.subject }; }
}
module.exports = { EmailParser };
