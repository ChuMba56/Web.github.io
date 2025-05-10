function findMin() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(n => parseFloat(n.trim()));
    const min = Math.min(...numbers);
    document.getElementById("result").innerText = `Найменше число: ${min}`;
  }
  
  function padZero(n) {
    return n < 10 ? '0' + n : n;
  }
  
  function showDate() {
    const now = new Date();
    const day = padZero(now.getDate());
    const month = padZero(now.getMonth() + 1);
    const year = now.getFullYear().toString().slice(2);
    document.getElementById("result").innerText = `Сьогоднішня дата: ${day}.${month}.${year}`;
  }
  
  function showTime() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    document.getElementById("result").innerText = `Поточний час: ${hours}:${minutes}:${seconds}`;
  }
  