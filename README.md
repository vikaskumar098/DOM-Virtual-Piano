
<h1 align="center">🎹✨ EchoKeys – Virtual Piano Experience</h1>

<p align="center">
  A dynamic, neon-styled, glow-animated virtual piano you can play using your keyboard.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Project-Interactive%20Web%20App-blueviolet?style=for-the-badge">
  <img src="https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-f97316?style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Completed-22c55e?style=for-the-badge">
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/vikaskumar098/DOM-Virtual-Piano?style=flat&color=yellow">
  <img src="https://img.shields.io/github/forks/vikaskumar098/DOM-Virtual-Piano?style=flat&color=blue">
</p>

---

## 🔗 Live Preview  
👉 **[Play Now](https://vikaskumar098.github.io/DOM-Virtual-Piano/)**

---

## 🌟 Features

- 🎧 **40+ interactive sound keys**
- ⚡ Real-time **keyboard + mouse** sound trigger
- 🎥 Full-screen **video background**
- 🌈 Neon **glow animations** for every key press  
- 🧊 Glass-blur transparent key UI  
- 🧠 **Dynamically generated** piano keys (no manual HTML)
- 🚀 Ultra-smooth performance (no libraries used)

---

## 🎥 UI Preview  
<img width="1919" height="1035" alt="image" src="https://github.com/user-attachments/assets/09945ee4-0827-4540-b78d-015d4837be6b" />


---

## 🛠️ Tech Stack  
- **HTML5**  
- **CSS3 / SCSS**  
- **JavaScript (Vanilla)**  
- **MP3 Audio Engine**  

---

## 🧠 How It Works

### 🎼 Keyboard → Sound Mapping  
Each keyboard key (A–Z, 0–9) mapped to mp3 files:

```

KeyA → ./audio/28.mp3
KeyB → ./audio/29.mp3
KeyC → ./audio/30.mp3
...
Digit0 → ./audio/60.mp3

```

### ⚡ Interaction Flow  
```

keypress → detect key → load audio → play() → glow animation → reset

````

### 🎹 Auto-Generated Piano  
Dynamic key creation:

```js
keys.forEach(code => {
    let div = document.createElement("div");
    div.className = "key";
    piano.appendChild(div);
});
````

---

## 📂 Folder Structure

```
📦 DOM-Virtual-Piano
 ┣ 📂 audio/
 ┃ ┗ 28.mp3 – 60.mp3
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 style.scss
 ┗ 📜 script.js
```

---

## ▶️ Run Locally

Open this file:

```
index.html
```

No installation required.

---

## 🤝 Contributing

PRs are welcome.

Improve animations, add new sound packs, add dark mode, or convert to PWA.

---

## 👨‍💻 Author

**Vikas Kumar**

🔗 **[LinkedIn](https://www.linkedin.com/in/vikas0905/)**

🔗 **[GitHub Profile](https://github.com/vikaskumar098)**

---

## 📜 License

Released under the **MIT License**.

---

<h3 align="center">⭐ If you like this project, give it a star on GitHub!</h3>

---

