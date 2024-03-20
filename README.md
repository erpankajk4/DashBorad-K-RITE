# FrontEnd Assignment given by K-RITE
Deployment link - 

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/erpankajk4/DashBorad-K-RITE
   ```

2. Navigate to the project directory:
   ```
   cd MovieHub---DashBorad-K-RITE
   ```
3. Install the project dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
Your web app should now be running locally. Open your web browser and access it at http://localhost:5173 or the port specified in your app.

## Library used and why
- React: Core for UI rendering.
React Router DOM: For client-side routing.
- Flowbite-React: Provides reusable UI components.
- React Icons: Icon library as React components.

### Development Tools:
- Vite: Fast build tool with hot module replacement.
- Tailwind CSS: Utility-first CSS framework.

## Features

1. **Fully Responsive Design:**
   - Ensures optimal display across all screen sizes.

2. **Dashboard Sidebar:**
   - Displays the number of folders fetched from `data.json`.
   - Provides a folder dropdown with the option to add a new folder.
   - Supports dropdown functionality for fetched folders.

3. **Product Dashboard:**
   - Utilizes a sticky table header and footer with a custom scrollbar.
   - Fetches all table data from `data.json` in the public directory.
   - Implements overlapped avatars with a hovering effect.
   - Limits avatar display to five, with a total avatar count.
   - Includes a toast bar at the bottom for notifications.
   - Enables selecting all rows in the table by clicking on the brand checkbox.

4. **Backend Connectivity:**
   - UI designed with easy backend integration in mind, ensuring seamless connection with the backend system.

5. **Customized Flowbite Components**
    - Tailored Flowbite components' CSS for desired UI improvements.