const express = require('express');
const app = express();

app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const category = `Category ${productId}`;
    
    res.json({
        id: productId,
        name: `Product ${productId} name`,
        category,
    });
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;