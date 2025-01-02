
import { HfInference } from '@huggingface/inference'


const SYSTEM_PROMPT = `
You are an assistant that receives a description of a technology
issue the user is experiencing and provides a potential diagnosis 
and troubleshooting steps. You don't need to address every issue 
the user mentions, but focus on the most prominent one. The fix 
can include steps like restarting the device, checking connections, 
updating software, or adjusting settings. Be sure to suggest any 
relevant actions that could resolve the problem, and mention when 
the user should contact technical support if needed. Format your 
response in markdown to make it easier to render to a web page.
`

const hf = new HfInference('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')

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-Nemo-Instruct-2407",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have these issues with my technology ${ingredientsString}. Please give me a fix!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
