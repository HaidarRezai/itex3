let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')

    document.querySelector('.slide').prependChild(items[0]) //here the lenght of items =6                                               

})
prev. addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) //here the lenght of items =6                                               
})