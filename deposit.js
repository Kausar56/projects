document.getElementById('deposit-btn').addEventListener('click', function(){
   const btnField = document.getElementById('deposit-amount');
   const newDepositAmountString = btnField.value;
   const newDepositAmount   = parseFloat(newDepositAmountString);
   
   
   const updateValue = document.getElementById('update');
   
  const previewsDepositTotalString = updateValue.innerText;

  const previewsDepositTotal = parseFloat(previewsDepositTotalString);


  previewsDepositTotal.innerText = newDepositAmount;

  const totalAmount = previewsDepositTotal + newDepositAmount;

  updateValue.innerText = totalAmount;


  const mainBalance = document.getElementById('balance');

  const  balanceString =mainBalance.innerText;

  const balanceValue = parseFloat(balanceString);

  const totalValue =  totalAmount + balanceValue;
  mainBalance.innerText = totalValue;
  


  




  btnField.value = "";





})