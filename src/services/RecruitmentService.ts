import { CorrectAnswer } from "../model/CorrectAnswer";
import { Question } from "../model/Question";
import api from "./api";

class RecruitmentService {
    private constructor(){};

    static async nextQuestion(): Promise<Question> {
        const { data } = await api.get('recruitment/spelling');
        return {
            audioURL: data['audio-url'],
            id: data.id,
            letterPool: data['letter-pool']
        };
    }

    static async answerQuestion(id: number, answer: string): Promise<CorrectAnswer> {
        const { data } = await api.post('recruitment/spelling', {
            id,
            answer
        });
        return {
            correct: data.correct,
            correctAnswer: data['correct-answer']
        };
    }
}

export default RecruitmentService;