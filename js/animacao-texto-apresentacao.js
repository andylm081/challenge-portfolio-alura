var el = document.querySelector("#main-title");
var text = "Olá, meu nome é Anderson Lima e eu sou Desenvolvedor Front-End.";
var interval = 80;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}

showtext(el, text, interval);