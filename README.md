# Tip Calculator

A simple, clean, and responsive **Tip Calculator** built with **HTML, CSS, and JavaScript**.

The app allows users to enter their bill amount and choose a tip percentage. It then automatically calculates the tip amount and the final total, making it quick and easy to split or calculate a restaurant bill.

## Features

* Enter the total bill amount
* Select or enter a tip percentage
* Automatically calculates the tip amount
* Calculates the final bill including the tip
* Instant calculations using JavaScript
* Responsive design
* Clean and simple user interface
* Lightweight and fast

## Technologies Used

* **HTML5** — Used to structure the calculator and its interface.
* **CSS3** — Used for styling, layout, responsiveness, and overall design.
* **JavaScript** — Handles the calculations and updates the results dynamically.

## How It Works

The calculator takes two main inputs:

1. **Bill Amount** — The total cost of the bill before the tip.
2. **Tip Percentage** — The percentage of the bill that the user wants to give as a tip.

The JavaScript then calculates:

**Tip Amount**

```text
Tip = Bill × (Tip Percentage ÷ 100)
```

**Total Amount**

```text
Total = Bill + Tip
```

### Example

If the bill is **$50** and the tip percentage is **20%**:

```text
Tip = $50 × (20 ÷ 100)
Tip = $10

Total = $50 + $10
Total = $60
```

## Project Structure

```text
tip-calculator/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the main structure of the calculator, including:

* Bill input
* Tip percentage input
* Calculate button/interface
* Tip result
* Total result

### `style.css`

Controls the visual appearance of the application, including:

* Layout
* Colors
* Typography
* Spacing
* Buttons
* Responsive design

### `script.js`

Contains the calculator's functionality. It:

* Reads the user's bill amount
* Gets the selected tip percentage
* Calculates the tip
* Calculates the final total
* Displays the results on the page

## Getting Started

You don't need any special software or dependencies to run this project.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tip-calculator.git
```

### 2. Open the project

Navigate to the project folder:

```bash
cd tip-calculator
```

### 3. Run it

Open `index.html` in your browser.

That's it! 

## Preview

```markdown
<img width="923" height="720" alt="image" src="https://github.com/user-attachments/assets/b89634e0-e098-421b-9bc7-0915667bd3b6" />
```

## License

This project is open-source and available for learning and personal use.

---

### Built With

**HTML • CSS • JavaScript**

A small project built to practice **frontend development, JavaScript logic, DOM manipulation, and responsive UI design**.
