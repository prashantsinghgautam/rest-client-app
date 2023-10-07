const express = require('express');
const router = express.Router();

// Define routes for different HTTP methods
router.get('/', (req, res) => {
    res.json({ message: 'GET request received' });
});

router.post('/', (req, res) => {
    // Handle POST request here
    res.json({ message: 'POST request received' });
});

router.put('/', (req, res) => {
    // Handle PUT request here
    res.json({ message: 'PUT request received' });
});

router.delete('/', (req, res) => {
    // Handle DELETE request here
    res.json({ message: 'DELETE request received' });
});

module.exports = router;
