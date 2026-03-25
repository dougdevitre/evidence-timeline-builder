class GapDetector {
  findGaps(events, thresholdDays = 30) {
    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    const gaps = [];
    for (let i = 1; i < sorted.length; i++) {
      const diff = (new Date(sorted[i].date) - new Date(sorted[i-1].date)) / (1000*60*60*24);
      if (diff > thresholdDays) gaps.push({ from: sorted[i-1].date, to: sorted[i].date, days: Math.round(diff) });
    }
    return gaps;
  }
}
module.exports = { GapDetector };
