export async function getImg({title}){
        try {
            const res = await fetch('http://localhost:3000/api/getImg', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    title: title
                })
            })

            const data = await res.json()
            console.log('img succesfully recieved')
            console.log(data)

            
            if(res.ok){
                return data

            }
        } catch (err) {
            console.log('Erro fetching img', err)
        }
    }

    export async function saveRecipe({recipeObj, recipe, imgTemp}){
    try {
         const res = await fetch('http://localhost:3000/api/addRecipe', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                title: recipeObj.title,
                description: recipeObj.description,
                servings: recipeObj.servings,
                timeMinutes: recipeObj.timeMinutes,
                difficulty: recipeObj.difficulty,
                recipe: recipe,
                imgUrl: imgTemp
            })
         }) 

         const data= await res.json()
         console.log('this is data', data)

         if(res.ok){
            console.log(data)
         }
    } catch (error) {
        console.log('An error occurred saving the recipe')
    }
    }