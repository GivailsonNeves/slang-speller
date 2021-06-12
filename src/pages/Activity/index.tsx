import { useEffect, useState } from "react";
import Speller from "../../components/templates/speller";
import { Question } from "../../model/Question";
import RecruitmentService from "../../services/RecruitmentService";

const Activity = () => {
    const emptyQuestion: Question = { audioURL: '', id: 0, letterPool: []};
    const [question, setQuestion] = useState<Question>(emptyQuestion);
    
    const nextQuestion = async () => {
        setQuestion(emptyQuestion);
        setQuestion(await RecruitmentService.nextQuestion());

    }

    const hdlAnswer = async (answer: string) => {
        console.log(answer);
        const res = await RecruitmentService.answerQuestion(question.id, answer);
        console.log(res);
    }

    useEffect(() => {
        nextQuestion();
    }, []);  

    return (
        <Speller
            soundURL={question.audioURL}
            letters={question.letterPool}
            onNextQuestion={() => nextQuestion()}
            onAnswerQuestion={(anwser: string) => hdlAnswer(anwser)}
        />
    )
};

export default Activity;