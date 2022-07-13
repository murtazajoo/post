let by = document.getElementById('by')
let text = document.getElementById('text')
let bywho = document.getElementById('who')
let fulltext = document.getElementById('fulltext')




by.addEventListener('input', function() {
    bywho.innerText = by.value
})


text.addEventListener('input', function() {
    fulltext.innerText = text.value
})






let profile = document.getElementById('profile')

function changepro(here) {
    profile.src = "img/" + here
}



let bgcolor = document.getElementById('bg-color')
let textcolor = document.getElementById('text-color')
let mainimg = document.getElementById('mainimg')

let colorValue = bgcolor.value;
bgcolor.addEventListener('input', function() {
    mainimg.style.backgroundColor = bgcolor.value
})

textcolor.addEventListener('input', function() {
    mainimg.style.color = textcolor.value
})



function changefont(font) {
    mainimg.style.fontFamily = 'var(--' + font + ')'
}

   
document.getElementById('bg-image').addEventListener('click',()=>{
    // background-image: url('');
fetch("https://source.unsplash.com/random").then( data => {
	let imgb = data.url;  
    mainimg.style.backgroundImage = "url('"+ imgb +"')" 
});
})