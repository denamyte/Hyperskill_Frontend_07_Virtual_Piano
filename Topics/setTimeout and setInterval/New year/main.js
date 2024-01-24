let days = 5;

function greetings() {
  const executable = () => {
    if (days === 0) {
      clearInterval(intervalId);
      console.log("Happy New Year!");
    } else {
      console.log(days--);
    }
  };
  const intervalId = setInterval(executable, 1000);
}
