import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompts, setprevPrompts] = useState([]); // for history 
    const [showResult, setshowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    /* Typing effect for displaying result */
    const typeEffect = (text, index = 0) => {
        if (index < text.length) {
            setResultData(prev => prev + text[index]);
            setTimeout(() => typeEffect(text, index + 1), 2); // Adjust speed as needed
        }
    };

    const onSent = async (prompt) => {
        /* Clear the previous result and display loading state */
        setResultData(""); 
        setLoading(true);
        setshowResult(true);
        setrecentPrompt(input);
        try {
            const response = await run(input); // Wait for the response
            typeEffect(response); // Display the response with typing effect
        } catch (error) {
            console.error("Error fetching data:", error);
            setResultData("An error occurred while fetching data.");
        } finally {
            setLoading(false); // Ensure loading is set to false regardless of success or failure
            setInput(""); // Clear the input field
        }
    };

    const contextValue = {
        prevPrompts,
        setprevPrompts,
        onSent,
        setrecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    };

    return ( 
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
