  let buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
    let buttonValue = buttons[i].innerText;
      document.getElementById('input').value = document.getElementById('input').value + buttonValue;
      document.getElementById('clear').addEventListener('click', function(){
        document.getElementById('input').value = '';
      })
    
    })
      document.getElementById('equal').addEventListener('click',function(){
        document.getElementById('input').value = eval(document.getElementById('input').value)
      })
  }
        
  