const express = require('express'); const cors = require('cors'); require('dotenv').config();
const app = express(); app.use(cors()); app.use(express.json());
app.get('/health', (_, res) => res.json({ status: 'ok', service: 'evidence-timeline-builder' }));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/timeline', require('./routes/timeline'));
app.listen(process.env.PORT || 3000, () => console.log('🧾 Evidence Timeline Builder running'));
module.exports = app;
