# Connector Pro

**Работа найдётся для каждого | Work for everyone**

Progressive Web App (PWA) for job marketplace in Israel.

## Live Demo

**https://chernushoov.github.io/connector-pro/**

## Features

- 🌍 4 Languages: Russian, Hebrew, English, Arabic
- 📱 PWA - Install on home screen
- 🔄 Offline support
- 📞 WhatsApp integration
- 👷 Worker flow: browse shifts, apply, track tasks
- 🏢 Employer flow: post shifts, manage applications
- 🔄 RTL support for Hebrew and Arabic

## Screenshots

| Auth | Shifts | Profile |
|------|--------|---------|
| Phone verification | Browse available shifts | Worker profile |

## Tech Stack

- Pure HTML/CSS/JavaScript
- No frameworks, no build step
- Service Worker for offline
- LocalStorage for data persistence

## Usage

### For Workers
1. Open the app
2. Verify phone number
3. Select "Looking for work"
4. Fill your profile
5. Browse and apply to shifts
6. Contact employer via WhatsApp

### For Employers
1. Open the app
2. Verify phone number
3. Select "Looking for worker"
4. Fill company profile
5. Create shifts
6. Review applications

## Local Development

```bash
# Clone the repo
git clone https://github.com/chernushoov/connector-pro.git
cd connector-pro

# Start local server
python3 -m http.server 8080

# Open http://localhost:8080
```

## Deployment

The app is automatically deployed via GitHub Pages.

To deploy your own:
1. Fork this repository
2. Go to Settings → Pages
3. Select branch: master, folder: / (root)
4. Your app will be available at `https://YOUR_USERNAME.github.io/connector-pro/`

## Roadmap

- [ ] Firebase backend integration
- [ ] Real SMS verification
- [ ] Push notifications
- [ ] Payment system (Escrow)
- [ ] Rating & reviews
- [ ] Native apps (iOS/Android)

## License

MIT

---

Made with ❤️ for Israeli job market
