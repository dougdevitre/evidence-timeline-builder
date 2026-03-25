class DateExtractor {
  extract(text) {
    const patterns = [/\d{1,2}\/\d{1,2}\/\d{2,4}/g, /\d{4}-\d{2}-\d{2}/g, /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\s+\d{1,2},?\s+\d{4}/gi];
    const dates = []; patterns.forEach(p => { const m = text.match(p); if (m) dates.push(...m); }); return [...new Set(dates)];
  }
  normalize(dateStr) { const d = new Date(dateStr); return isNaN(d) ? null : d.toISOString().split('T')[0]; }
}
module.exports = { DateExtractor };
