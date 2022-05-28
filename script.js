//.......h4 color change.......
const h4 = document.getElementsByTagName('h4');
for(colorChange of h4){
    colorChange.style.color = 'red';
}
//.......given border radius......
let cardBorder = document.getElementsByClassName('card-border');
        for(changeBorder of cardBorder){
          // console.log(changeBorder);
          changeBorder.style.borderRadius = '30px';
        }
//..........remove button.........
const pandaButton = document.getElementsByClassName('panda-btn-buynow');
        for(removeButton of pandaButton){
          // console.log(removeButton);
          removeButton.addEventListener('click', function(event){
            event.target.parentNode.removeChild(event.target);
          })
        }
//.......input feild disable button........
document.getElementById('email-input').addEventListener('keyup', function(event){
  if(event.target.value == 'email'){
    document.getElementById('input-button').removeAttribute('disabled');
  }
  else{
    document.getElementById('input-button').setAttribute('disabled',true);
  }
})