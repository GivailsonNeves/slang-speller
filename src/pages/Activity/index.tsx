import { useEffect, useState } from "react";
import Speller from "../../components/templates/speller";
import { CorrectAnswer } from "../../model/CorrectAnswer";
import { Question } from "../../model/Question";
import RecruitmentService from "../../services/RecruitmentService";

const Activity = () => {
    const emptyQuestion: Question = { audioURL: '', id: 0, letterPool: []};
    const [question, setQuestion] = useState<Question>(emptyQuestion);
    const [answer, setAnswer] = useState<CorrectAnswer | null>(null);
    const [totalQuestions, setTotalQuestions] = useState<number>(0);
    const [totalFirstTry, setTotalFirstTry] = useState<number>(0);
    const [firstTry, setFirstTry] = useState<boolean>(true);
    
    const nextQuestion = async () => {
        setQuestion(emptyQuestion);
        setFirstTry(true);
        setQuestion(await RecruitmentService.nextQuestion());
        setTotalQuestions(totalQuestions + 1);

    }

    const hdlAnswer = async (answer: string) => {
        console.log(answer);
        const _answer = await RecruitmentService.answerQuestion(question.id, answer);
        setAnswer(_answer);
        if (firstTry && _answer.correct) {
            setTotalFirstTry(totalFirstTry + 1);
        }
        setFirstTry(false);
    }

    const hdlCloseFeedback = async () =>{
        if (answer?.correct) {
            nextQuestion();
        }
        setAnswer(null);
    }

    useEffect(() => {
        nextQuestion();
    }, []);  

    return (
        <Speller
            totalAnswerd={totalQuestions}
            totalFirstTry={totalFirstTry}
            correctAnswer={answer}
            onFeedbackClose={hdlCloseFeedback}
            soundURL={question.audioURL}
            letters={question.letterPool}
            onNextQuestion={() => nextQuestion()}
            onAnswerQuestion={(anwser: string) => hdlAnswer(anwser)}
        />
    )
};

export default Activity;