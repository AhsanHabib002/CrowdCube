

# CrowdCube

**CrowdCube** is an intuitive fundraising platform designed to connect individuals, entrepreneurs, and creative minds with potential donors and investors. Whether you need funds for personal issues, startups, businesses, or creative ideas, CrowdCube provides a secure and efficient way to raise and manage donations.

[Live Site ➜](https://crowdclub-8b1f7.web.app/)

---

## 🚀 Screenshot

![CrowdCube Preview]((https://i.postimg.cc/gcRr613j/Screenshot-2025-02-05-152531.png))

---

## 🛠️ Technologies Used

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router DOM
- **Authentication & Database:** Firebase
- **Animations:** React Awesome Reveal, Swiper
- **Notifications:** React Toastify, SweetAlert2
- **Tooltips:** React Tooltip

---

## 🌟 Core Features

- **Add Campaign:** Users can create campaigns to raise funds for businesses, startups, creative projects, or personal issues (e.g., medical expenses).
- **Update Campaign:** Campaigns can be edited anytime via the update campaign page.
- **Donations:** Supporters can donate to campaigns securely.
- **Track Donations:** Donors can monitor their contributions through the *My Donations* page.
- **Authentication:** Secure login system to prevent fraud and unauthorized access.

---

## 📦 Dependencies

### Runtime Dependencies:
- `firebase` - Authentication & real-time database
- `react`, `react-dom` - Core React library
- `react-awesome-reveal` - Animations
- `react-icons` - Icon library
- `react-router-dom` - Routing management
- `react-toastify` - Toast notifications
- `react-tooltip` - Tooltip support
- `sweetalert2` - Alert modals
- `swiper` - Interactive sliders

### Development Dependencies:
- `vite` - Fast development server and build tool
- `eslint` - Linting for code quality
- `tailwindcss`, `daisyui` - CSS utility framework & UI components
- `postcss`, `autoprefixer` - CSS processing tools
- `@vitejs/plugin-react` - React plugin for Vite
- Type definitions (`@types/react`, `@types/react-dom`) for TypeScript support

---

## ⚙️ Installation & Setup

Follow these steps to run CrowdCube locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/crowdcube.git
   cd crowdcube
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a `.env` file in the root directory.
   - Add your Firebase configuration details:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

---

## 🌍 Live Project

Check out the live version: [CrowdCube Live](https://crowdclub-8b1f7.web.app/)

---

## 💡 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Create a Pull Request

---
