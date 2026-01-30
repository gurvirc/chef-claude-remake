import { InferenceClient } from "@huggingface/inference";
import dotenv from 'dotenv'

dotenv.config()

const client= new InferenceClient(process.env.HF_API_KEY)

    

    const SYSTEMSPROMPT = `You are an assistant that receives a list of ingredients that a user has and
        suggests a recipe they could make with some or all of those ingredients. You don't need to
        use every ingredient they mention in your recipe. The recipe can include additional 
        ingredients they didn't mention, but try not to include too many extra ingredients. Format 
        your response in markdown to make it easier to render to a web page`

export async function recipeServices(ingredientsArr){

    const ingredients = ingredientsArr.join(", ")

    try{
        const response = await client.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
        {
            role: "system", //how ai should behave
            content: SYSTEMSPROMPT, //input it recieves
        },

        {
            role: "user",
            content: `I have these ingredients ${ingredients}. Please suggest a recipe`
        },
    ],
            max_tokens: 1024,
        })

        return response.choices[0].message.content

    }catch(err){
        console.error("Recipe generation error:", err)
    }



    


    
}