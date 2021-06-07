import api from "./api";

class RecruitmentService {
    private constructor(){};

    nextQuestion() {
        return api.get('recruitment/spelling');
    }

    answerQuestion(questionId: number, answer: string) {
        return api.post('recruitment/spelling');
    }
}

export default RecruitmentService;