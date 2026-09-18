# Velora

### A Modern & Customizable Chrome New Tab

Velora transforms your default Chrome New Tab into a clean, modern, and customizable workspace designed for everyday browsing.

Instead of opening an empty tab, Velora gives you quick access to useful tools, bookmarks, weather information, themes, language options, and customizable settings — all in one place.

---

## ✨ Features

* 🌤️ **Weather**

  * View current weather information directly from your New Tab.
  * Search for a city and view its weather data.

* 🔖 **Quick Bookmarks**

  * Keep frequently used websites within easy reach.
  * Add and manage your own shortcuts.

* 🎨 **Themes**

  * Customize the visual appearance of your New Tab.
  * Switch between available themes.

* 🌐 **Language Options**

  * Choose from the available interface languages.

* ⚡ **Performance Modes**

  * Choose between different performance modes depending on your device and preferences.
  * Lightweight options can reduce visual effects and improve responsiveness.

* ⚙️ **Customizable Settings**

  * Personalize available Velora preferences from the settings panel.

* 📱 **Responsive Design**

  * Designed to provide a consistent experience across different screen sizes.

---

## 🖼️ Screenshots

> Screenshots will be added here.

<!--
Add your screenshots here:

![Velora New Tab](screenshots/main.png)

![Velora Settings](screenshots/settings.png)
-->

---

## 🚀 Installation

### Install from source

1. Download or clone this repository.

2. Open Google Chrome.

3. Navigate to:

```text
chrome://extensions
```

4. Enable **Developer mode**.

5. Click **Load unpacked**.

6. Select the Velora project folder.

7. Open a new Chrome tab and Velora should appear automatically.

---

## 📦 Project Structure

```text
Velora/
│
├── assets/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── fonts/
│   ├── Vazir-Regular.woff
│   └── Vazir-Regular.woff2
│
├── manifest.json
├── newtab.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

---

## 🛠️ Built With

Velora is built using standard web technologies:

* HTML5
* CSS3
* JavaScript
* Chrome Extensions Manifest V3
* Open-Meteo Weather API

No external framework is required to run the core extension.

---

## 🔐 Privacy

Velora is designed to keep user preferences stored locally in the browser whenever possible.

The extension does not require:

* An account
* A password
* Sign-in
* Access to browsing history
* Access to personal communications

### Network Requests

Some features require requests to external services.

**Weather**

When the user searches for a city, Velora uses Open-Meteo services to find the city's coordinates and retrieve weather information.

**Search**

Search queries entered into the search field are sent to the selected search engine.

**Bookmark Favicons**

Velora may request website favicon information to display icons for saved bookmarks.

Please review the project's source code for the most accurate and current implementation of its data handling.

---

## ⚡ Performance

Velora includes performance options that allow users to choose how much visual processing and effects are used by the interface.

This makes it possible to prioritize either:

* A richer visual experience
* Lower resource usage and smoother performance

---

## 📌 Version

**Current version:** `1.1.1`

Velora is currently distributed as a source-based Chrome extension.

---

## 🗺️ Roadmap

Planned improvements may include:

* [ ] More customization options
* [ ] Additional themes
* [ ] More language support
* [ ] Improved bookmark management
* [ ] Additional widgets
* [ ] UI and performance improvements
* [ ] Chrome Web Store release

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

If you find a problem or have an idea for improving Velora, open an **Issue** or submit a **Pull Request**.

Before submitting a major change, please describe what you would like to change and why.

---

## 🐛 Bug Reports

When reporting a bug, please include:

* Chrome version
* Operating system
* Velora version
* Steps to reproduce the problem
* Expected behavior
* Actual behavior
* Screenshots, if applicable

---

## 📄 License

This project is currently distributed under the license included in this repository.

See [`LICENSE`](LICENSE) for details.

---

## 💙 About Velora

Velora is built with a simple idea:

> **Make every new tab more useful.**

The goal is to provide a modern, lightweight, and customizable starting point for everyday browsing.

---

### ⭐ Support the Project

If you find Velora useful, consider giving the repository a ⭐ on GitHub.

Your feedback and suggestions help improve the project.

