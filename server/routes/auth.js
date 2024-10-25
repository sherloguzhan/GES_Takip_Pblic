const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
  const { kullaniciadi, sifre } = req.body;

  try {
    const query = 'SELECT * FROM Users WHERE KullaniciAdi = $1 AND Sifre = $2';
    const result = await db.query(query, [kullaniciadi, sifre]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.json({ 
        success: true, 
        message: 'Giriş başarılı', 
        user: { 
          userid: user.userid, 
          rol: user.rol 
        } 
      });
    } else {
      res.json({ success: false, message: 'Kullanıcı adı veya şifre hatalı' });
    }
  } catch (error) {
    console.error('Kullanıcı doğrulanamadı:', error);
    res.status(500).json({ success: false, message: 'Sunucu hatası' });
  }
});

module.exports = router;