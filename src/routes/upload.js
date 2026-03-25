const express = require('express'); const multer = require('multer'); const { v4: uuidv4 } = require('uuid');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } });
const router = express.Router();
router.post('/', upload.array('files', 10), (req, res) => {
  const results = (req.files || []).map(f => ({ id: uuidv4(), name: f.originalname, size: f.size, type: f.mimetype }));
  res.json({ uploaded: results.length, files: results });
});
module.exports = router;
