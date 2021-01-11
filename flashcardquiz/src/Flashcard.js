import React , {useState} from "react";

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false);

    let content = null;
    if (!flip) {
        content = (
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map((option, index) => {
                        return (<div className="flashcard-option" key={index}>{option}</div>);
                    })}

                </div>
            </div>
        );
    }
    else {
        content = (
            <div className="back">
                {flashcard.answer}
            </div>
        );
    }
    return (
        <div 
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => {setFlip(!flip)}}>
            {content}
        </div>
    );
}