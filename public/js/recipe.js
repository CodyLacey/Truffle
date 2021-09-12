// store original recipe
document.querySelector('.importRecipe2').addEventListener('click', store)
function store() { 
    let url = document.getElementById('input')
    localStorage.setItem('url', url.value)
}
document.getElementById('anchor').setAttribute('href', localStorage.getItem('url'))
document.getElementById('recUrl').value = localStorage.getItem('url')


// SAVE RECIPE TO DB
const button = document.getElementById('saveRecipe').addEventListener('click', save)
function save() {
    alert('Recipe has been saved!')
    location.reload()
}





// Print RECIPE
document.querySelector('.print').addEventListener('click', printRecipe)
function printRecipe(){
    document.title = document.querySelector('.recipeName').innerHTML

    document.querySelector(".recipeSave").style.display = "none"
    document.querySelector(".print").style.display = "none"
    document.querySelector(".recipeImage").style.display = "none"

	let printContents = document.getElementById('recipe').innerHTML;
	let originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;

    document.querySelector(".print").style.display = "initial"
    document.querySelector(".recipeSave").style.display = "inline-block"
    document.querySelector(".recipeImage").style.display = "block"
}