// COOKBOOK PAGE

const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

async function deleteTodo(){
    const recipeItem = this.parentNode.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('cookbook/deleteRecipe', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'recipeIdFromJSFile': recipeItem
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}