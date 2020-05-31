//Js code for Sticky header


const sticky=document.getElementById("sticky")
sticky.style.display='none'
window.addEventListener('scroll',()=>{
      let scroll=window.scrollY
      if(scroll>=400){
          sticky.style.display=""
          sticky.style.position='fixed'
          sticky.style.top='0'
          sticky.style.zIndex='9999999999'
          sticky.style.width='100%'
      }
      else{
        sticky.style.display='none'
      }
})

//End of js Sticky header code


//jS code for buttons

var buttons=document.getElementById('button-click1')
buttons.addEventListener('click',()=>{
  buttons.style.background='black'
  buttons.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'

})



var buttons2=document.getElementById('button-click2')
buttons2.addEventListener('click',()=>{
  buttons2.style.background='black'
  buttons2.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'
  
})


var buttons3=document.getElementById('button-click3')
buttons3.addEventListener('click',()=>{
  buttons3.style.background='black'
  buttons3.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'
  
})

var buttons4=document.getElementById('button-click4')
buttons4.addEventListener('click',()=>{
  buttons4.style.background='black'
  buttons4.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'
  
})

var buttons5=document.getElementById('button-click5')
buttons5.addEventListener('click',()=>{
  buttons5.style.background='black'
  buttons5.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'
  
})

var buttons6=document.getElementById('button-click6')
buttons6.addEventListener('click',()=>{
  buttons6.style.background='black'
  buttons6.style.color='white'

  var carts=document.getElementById('cart')
  carts.style.background='black'
  carts.style.color='white'
  carts.innerHTML='ADD TO CART'


  var carts2=document.getElementById('cart2')
  carts2.style.background='black'
  carts2.style.color='white'
  carts2.innerHTML='ADD TO CART'
  
})

//end of js buttons


//header cart button

const greenCart=document.getElementById('cart2')
const greenP=document.getElementById('green')
const greenP2=document.getElementById('green2')
const shop=document.getElementById('shop')
greenCart.addEventListener('click',()=>{
  shop.innerHTML='1'
  greenCart.style.background='#BDD775'
  greenP2.style.color='#BDD775'
  greenP.style.color='#BDD775'
 
})


































