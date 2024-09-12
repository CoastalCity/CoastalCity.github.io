const express = require('express');
const path = require('path');
const app = express();

// Body parser für POST-Anfragen
app.use(express.urlencoded({ extended: true }));

// Statische Dateien (CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// Views (HTML-Seiten)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/saltychat', (req, res) => res.sendFile(path.join(__dirname, 'views', 'saltychat.html')));
app.get('/rules', (req, res) => res.sendFile(path.join(__dirname, 'views', 'rules.html')));
app.get('/laws', (req, res) => res.sendFile(path.join(__dirname, 'views', 'laws.html')));

// Starte den Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
