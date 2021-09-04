document.querySelector('.top').addEventListener('click', home)

function home() {
    location.href = "/"
}

document.querySelector('.print').addEventListener('click', printRecipe)

function printRecipe(){
    document.title = document.querySelector('.recipeName').innerHTML

    document.querySelector(".recipeSaveLink").style.display = "none"
    document.querySelector(".print").style.display = "none"
    document.querySelector(".recipeImage").style.display = "none"
    // document.querySelector(".recipeImage").style.visibility = "hidden"
    // document.querySelector(".recipeSaveLink").style.visibility = "hidden"
    // document.querySelector(".print").style.visibility = "hidden"

	let printContents = document.getElementById('recipe').innerHTML;
	let originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

    
	window.print();
	document.body.innerHTML = originalContents;

    // document.querySelector(".recipeImage").style.visibility = "visible"
    // document.querySelector(".recipeSaveLink").style.visibility = "visible"
    // document.querySelector(".print").style.visibility = "visible"
    // document.querySelector(".recipeStuff").style.display = "inline-Block"
    document.querySelector('.recipePt2').style.visibility = 'visible'
    document.querySelector(".print").style.display = "initial"
    document.querySelector(".recipeSaveLink").style.display = "inline-block"
    document.querySelector(".recipeImage").style.display = "block"

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