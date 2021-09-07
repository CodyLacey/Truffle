document.querySelector('.top').addEventListener('click', home)

function home() {
    location.href = "/"
}

document.querySelector('.print').addEventListener('click', printRecipe)

function printRecipe(){
    document.title = document.querySelector('.recipeName').innerHTML
    document.querySelector(".recipeSaveLink").style.display = "none"
    document.querySelector(".print").style.display = "none"
    document.querySelector(".recipeStuff").style.display = "none"

	let printContents = document.getElementById('recipe').innerHTML;
	let originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;

    document.querySelector(".recipeStuff").style.display = "inline-Block"
    document.querySelector(".print").style.display = "inline"
    document.querySelector(".recipeSaveLink").style.display = "inline-block"

}
// async function deletePokemon(){
//     try{
//         const res = await fetch('/grabRecipe', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 'recipeName': rName,
//                 'recipeDescription': description
//             })
//         })
//         const data = await res.json()
//         console.log(data);
        
        
//     }catch(err){
//         console.log(err);
//     }
// }