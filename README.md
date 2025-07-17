# ⏵ StreamEase - Ad Skipper for YouTube

Automatically skips YouTube ads so you don’t have to.  
No more clicking the “Skip Ad” button — just smooth and uninterrupted watching.

## 🚀 Features

- ⏭️ Auto-clicks the "Skip Ad" button on YouTube
- 🧠 Works instantly and silently in the background
- 🧩 Lightweight and fast — no need to block or modify ads
- 🔒 100% private — no tracking or data collection
- ⚙️ Supports normal videos and embedded players

## 🛠️ Installation

### Option 1: Install as Unpacked Extension

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top-right).
4. Click **"Load unpacked"** and select this extension folder.
5. Done! YouTube ads will now be auto-skipped.

### Option 2: Pack as CRX
If you wish to distribute it manually or upload to Chrome Web Store, you can pack it via `chrome://extensions/` using **Pack extension**.

## 🧠 How It Works

This extension uses content scripts or the Chrome Debugger API (depending on your implementation) to monitor the YouTube page and simulate a mouse click on the **"Skip Ad"** button as soon as it appears.

> 💡 Note: It does **not block ads**, only skips them when the "Skip" button becomes clickable.

## 🖥️ Permissions

- `debugger` — to inject script / simulate click

> ✅ No external requests or user data collection — fully offline and private.

## 📦 Project Structure
```
 yt-ad-skipper/
 ├── manifest.json
 ├── service-worker.js
 ├── content.js
 ├── icons/
 │ └── icon16.png
 │ └── icon48.png
 │ └── icon128.png
 ├── README.md
 └── Lincense
```
