# Employee Dashboard Assessment

This is a robust and scalable functional dashboard built using React and AG Grid, designed for handling large datasets efficiently while maintaining a clean, professional aesthetic.

## Features

- **AG Grid Integration**: Utilizes AG Grid Community for high-performance tabular data display.
- **Responsive Design**: Fully responsive layout that adapting to different screen sizes.
- **Dark Mode Aesthetic**: A premium, modern dark theme suitable for professional environments.
- **Real-time Stats**: Summary cards showing key metrics (Total Employees, Avg Salary, Active Rate, etc.).
- **Search & Filtering**:
  - Global search bar for quick filtering.
  - Column-specific filters (Set filters, Number filters, Text filters).
- **Custom Renderers**:
  - Avatar with initials.
  - Status pills (Active/Inactive).
  - Star rating visualization.
  - Skills pills.
- **Export Functionality**: Ability to export the current grid view to CSV.

## Tech Stack

- **Framework**: React 19 + Vite
- **Grid**: AG Grid Community v33+ (Modular Architecture)
- **Icons**: Lucide React
- **Styling**: CSS Modules / Vanilla CSS (Modern CSS Variables)

## Project Structure

```
src/
├── pages/
│   ├── EmployeesDash.jsx  # Main Dashboard Component
│   └── EmployeesDash.css  # Dashboard Styling
├── employeeData.js        # Mock Data Source
├── App.jsx               # Routing & Layout
└── main.jsx              # Entry Point
```

## Setup & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Note on Transitions
Transitions have been kept minimal to ensure a snappy, professional feel without unnecessary distractions, prioritizing performance and usability.
