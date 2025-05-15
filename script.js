function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (e) {
      alert("Invalid input");
      clearResult();
    }
  }