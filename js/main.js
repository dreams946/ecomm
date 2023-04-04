let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'tshirt',
        tag:"Men's Fashion t-shirt",
        price: 139.00,
        InCart:0,         
    },

    {
        name:'tshirt',
        tag:'Mens',
        price:15,
        InCart:0        
    },
    {
        name:'tshirt',
        tag:'Mens',
        price:15,
        InCart:0        
    },
    {
        name:'tshirt',
        tag:'Mens',
        price:15,
        InCart:0        
    }
]

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        //console.log('added to cart');
        cartNumbers(products[i]);
        totalCost(products[i]);

    });
    //alert(carts[i]);

} 

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
      document.querySelector('.cart span').textContent = productNumbers;  
    }
}

function cartNumbers(product){
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);   
    localStorage.setItem('cartNumbers', 1);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart')  ;  
    cartItems = JSON.parse(cartItems);
    console.log("my cartitems are", cartItems);

    if (cartItems != null){
        if(cartItems[product.tag]== undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }

        }
        cartItems[product.tag].InCart += 1 ;

    } else{
        product.InCart = 1;  
        cartItems = {
            [product.tag]:product
        }
    }   
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(product){
  console.log("the product price is:", product.price);
}
  
onLoadCartNumbers();