document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    console.log(depositAmount);

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;




    // clear input field
    depositInput.value = '';
});

//handle withdrew button
document.getElementById('withdrew-button').addEventListener('click', function () {
    const withdrewInput = document.getElementById('withdrew-input');
    const withdrewAmountText = withdrewInput.value;
    const withdrewAmount = parseFloat(withdrewAmountText);


    // update withdrew-total
    const withdrewTotal = document.getElementById('withdrew-total');
    const previouswithdrewTotalText = withdrewTotal.innerText;
    const previouwithdrewTotal = parseFloat(previouswithdrewTotalText);
    withdrewTotal.innerText = previouwithdrewTotal + withdrewAmount;

    // update balance after withdrew
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrewAmount;
    // clear withdrew input field
    withdrewInput.value = '';


})
