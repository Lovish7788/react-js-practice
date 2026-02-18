# 💹 Currency Converter (React + Tailwind CSS)

A real-time currency conversion application built using **React.js** and **Tailwind CSS v4**. This project demonstrates the implementation of custom hooks, efficient API handling, and component reusability in a modern web environment.

---
## API link
``https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json``
## 🧠 Core Architecture & Logic

### 1. Custom Hook: `Usedcurrencyinfo`
This hook acts as the data layer of the application.
* **Purpose**: Manages the fetching of exchange rates from an external API.
* **Implementation**: Uses `useEffect` to trigger a fetch request whenever the base currency changes.
* **Stability**: Initializes state with an empty object `{}` to prevent `undefined` errors during the initial render or network delay.
* **API Endpoint**: Utilizes the latest exchange rate API to ensure data accuracy.

### 2. Reusable Component: `InputBox`
A modular UI component designed to handle both "From" and "To" currency inputs.
* **Props Management**: Receives variables such as `label`, `amount`, and `onAmountchange` to remain flexible and reusable.
* **Accessibility**: Implements the `useId` hook to provide unique IDs for labels and inputs, following web accessibility standards.
* **Dynamic Rendering**: Maps through the `currencyoptions` array to generate the selection dropdown.

### 3. Main Application: `App.jsx`
The central hub where state and logic are synchronized.
* **State Lifting**: Holds the master state for `amount`, `from`, `to`, and `convertedAmount` to keep child components in sync.
* **Swap Functionality**: Includes logic to invert the 'From' and 'To' currencies while maintaining the current conversion values.
* **Calculation**: Performs the conversion math using the fetched exchange rate: `amount * currencyInfo[to]`.

---

## 🎨 UI & Styling (Tailwind CSS)

* **Glassmorphism**: Uses `backdrop-blur-sm` and `bg-white/30` for a modern, transparent card effect.
* **Responsive Layout**: Employs `flex` and `max-w-md` classes to ensure the app looks great on both mobile and desktop.
* **Dynamic Background**: Integrates a high-quality background image via inline styles and template literals.



---

## 💡 Key Technical Learnings

* **Asynchronous Fetching**: Handling the delay between the UI render and the API response using default state values.
* **Component Reusability**: Designing components that can be used multiple times in the same UI without conflicts.
* **Optimization**: Using `key` props in loops to improve React's reconciliation process.

---

