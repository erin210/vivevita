const express = require('express');
const path = require('path');
const app = express();

// 設定靜態文件夾
app.use(express.static(path.join(__dirname, 'public')));

// 讓網址可以省略 .html
app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', `${req.params.page}.html`));
});

// 啟動伺服器
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});