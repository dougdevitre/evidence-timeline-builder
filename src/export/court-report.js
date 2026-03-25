class CourtReportGenerator {
  generate(events, caseInfo) {
    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    let report = `CHRONOLOGICAL EVIDENCE REPORT\nCase: ${caseInfo.caseNumber || 'N/A'}\nGenerated: ${new Date().toISOString()}\n\n`;
    sorted.forEach((e, i) => { report += `${i+1}. [${e.date}] ${e.title}\n   Category: ${e.category}\n   ${e.description || ''}\n\n`; });
    return report;
  }
}
module.exports = { CourtReportGenerator };
