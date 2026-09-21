const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.get(['/', '/home'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'info', 'menu.html'));
});


app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, 'info', 'order.html'));
});


app.get('/item/:name/price/:price', (req, res) => {
    const { name, price } = req.params;

    const htmlContent = `<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>รายละเอียดสินค้า - ${name}</title>
    <link rel="stylesheet" href="/public/css/style.css">
</head>
<body>
    <header>
        <h1>Warn Bakery Cafe</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/home">หน้าแรก</a></li>
            <li><a href="/menu">เมนูเบเกอรี่ (Menu)</a></li>
            <li><a href="/order">ติดต่อและจองโต๊ะ</a></li>
            <li><a href="/home">เกี่ยวกับเรา</a></li>
        </ul>
    </nav>
    <section class="item-detail-section">
        <h2>รายละเอียดรายการอาหาร (Item Details)</h2>
        
        <!-- Cyan Highlight Box according to assignment rules -->
        <div class="cyan-highlight-box">
            <h1>${name}</h1>
            <p>ราคา ${price} บาท</p>
        </div>

        <div class="button-group">
            <a href="/menu" class="btn-back">← กลับไปหน้าเมนู</a>
            <a href="/order" class="btn-order-now">สั่งซื้อรายการนี้</a>
        </div>
    </section>
</body>
</html>`;

    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Routes available:`);
    console.log(`  - http://localhost:${PORT}/home`);
    console.log(`  - http://localhost:${PORT}/menu`);
    console.log(`  - http://localhost:${PORT}/order`);
    console.log(`  - http://localhost:${PORT}/item/:name/price/:price`);
});
