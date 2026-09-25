const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const submitBtn = document.getElementById("submitBtn");
const totalLabel = document.getElementById("total");

submitBtn.addEventListener('click', () => {
    const billValue = Number(bill.value);
    const tipValue = Number(tip.value);

    let total = billValue + (billValue * (tipValue / 100));

    totalLabel.textContent = total.toFixed(2);
});
