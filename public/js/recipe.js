// store original recipe
document.querySelector('.importRecipe2').addEventListener('click', store)
function store() { 
    let url = document.getElementById('input')
    localStorage.setItem('url', url.value)
}
document.getElementById('anchor').setAttribute('href', localStorage.getItem('url'))





// Print RECIPE
document.querySelector('.print').addEventListener('click', printRecipe)
function printRecipe(){
    document.title = document.querySelector('.recipeName').innerHTML

    document.querySelector(".recipeSaveLink").style.display = "none"
    document.querySelector(".print").style.display = "none"
    document.querySelector(".recipeImage").style.display = "none"

	let printContents = document.getElementById('recipe').innerHTML;
	let originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;

    document.querySelector('.recipePt2').style.visibility = 'visible'
    document.querySelector(".print").style.display = "initial"
    document.querySelector(".recipeSaveLink").style.display = "inline-block"
    document.querySelector(".recipeImage").style.display = "block"

}