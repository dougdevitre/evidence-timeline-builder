const CATEGORIES = ['communication', 'incident', 'legal-filing', 'medical', 'financial', 'custody-exchange'];
class AutoTagger {
  tagEvent(text) {
    const lower = text.toLowerCase();
    if (lower.includes('text') || lower.includes('email') || lower.includes('call')) return 'communication';
    if (lower.includes('filed') || lower.includes('motion') || lower.includes('court')) return 'legal-filing';
    if (lower.includes('doctor') || lower.includes('therapy')) return 'medical';
    return 'general';
  }
  extractKeyPeople(text) { return (text.match(/[A-Z][a-z]+ [A-Z][a-z]+/g) || []); }
}
module.exports = { AutoTagger };
