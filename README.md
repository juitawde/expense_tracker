# 💰 Daily Expense Tracker

A simple and modern **Daily Expense Tracker Web App** that helps you record, manage, and monitor your daily spending.
The application stores data in your browser using **localStorage**, so your expenses remain saved even after refreshing the page.

Live Link: https://juitawde.github.io/expense_tracker/

---

## ✨ Features

✅ Add new expenses with:

* Name
* Amount
* Category
* Date

✅ Automatically saves data in browser storage

✅ Sorts expenses by **latest date first**

✅ Delete individual expenses

✅ Clear all expenses with confirmation

✅ Automatically calculates total spending

✅ Clean pastel gradient UI with premium styling

✅ Data persists even after page reload

---

## 🧠 How It Works

The application follows a simple data flow:

1. User enters expense details
2. Data is stored in an array
3. Array is saved to localStorage
4. The UI is rendered from stored data
5. Whenever data changes → UI refreshes automatically

---

## 📁 Project Structure

```
project-folder/
│
├── index.html      # Structure of the webpage
├── style.css       # Premium pastel gradient UI styling
└── script.js       # Core logic and functionality
```

---

## 🚀 How to Run the Project

1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start adding expenses

No installation or server required.

---

## 💾 Data Storage

The app uses **localStorage** to save expenses.

This means:

* Data is stored in your browser
* No database required
* Data remains after refresh
* Data clears only if manually deleted or browser storage cleared

---

## 🧩 Main Functions Explained

### render()

Displays all expenses and updates total spending.

### addExpense()

Validates input and adds a new expense.

### deleteExpense(index)

Removes selected expense from the list.

### clearAll()

Deletes all expenses after confirmation.

### saveData()

Stores updated expense list in localStorage.

---

## 🎨 UI Design

* Soft pastel gradient background
* Card-based layout
* Clean typography
* Smooth hover effects
* Organized expense display

Designed for a minimal and pleasant user experience.

---

## 📱 Screenshots(Output)

<img width="1470" height="956" alt="Screenshot 2026-02-16 at 9 31 59 PM" src="https://github.com/user-attachments/assets/df773cbf-cb13-4f2d-ba93-63cb2687ecaf" />

---

## 🔮 Future Improvements (Optional)

* Expense categories chart
* Monthly summary reports
* Export to CSV / PDF
* Edit expense feature
* Dark mode toggle

---

## 📜 License

Free to use for learning and personal projects.

---

## 👩‍💻 Author- JUI

Created as a learning project to understand:

* JavaScript arrays
* DOM manipulation
* localStorage
* JSON parsing
* Dynamic UI rendering

---

⭐ If you like this project, feel free to enhance it!
