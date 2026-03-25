const express = require('express'); const { v4: uuidv4 } = require('uuid');
const router = express.Router(); let events = [];
router.post('/events', (req, res) => { const event = { id: uuidv4(), ...req.body, createdAt: new Date().toISOString() }; events.push(event); res.status(201).json(event); });
router.get('/:caseId', (req, res) => { res.json(events.filter(e => e.caseId === req.params.caseId).sort((a,b) => new Date(a.date) - new Date(b.date))); });
module.exports = router;
