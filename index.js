const names = ['Charlie', 'Samip', 'Ali'];
  const eventName = 'birthday';
  const result = writeCards(names, eventName);
  console.log(result);
  
function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
      debugger;
    }
    return messages;
  }
  
function countDown(startingNumber) {
  if (startingNumber < 0) {
    console.log("Please provide a positive integer.");
    return;
  }

  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

countDown(10); // Call the function with any positive integer


  