import { Question } from '../model/model.js';
export const question = {
    all: (req, res) => {
        Question.find({ product_id: Number(req.query.product_id) })
            .then((dbRes) => { console.log('response from db: ', dbRes); res.send(dbRes); })
            .catch((err) => { console.log('error fetching questions', err); res.send('error getting questions'); });
    },
    addQuestion: (req, res) => {
        // first get the num of questions,
        Question.find().sort({ id: -1 }).limit(1)
            .then((dbRes) => {
            dbRes[0].id++; // increment the total to create the new id
            new Question({
                id: dbRes[0].id++,
                product_id: req.body.product_id,
                body: req.body.body,
                date_written: Date.now() + "",
                asker_name: req.body.name,
                asker_email: req.body.email,
                reported: 0,
                helpful: 0,
            }).save()
                .then((dbRes) => {
                console.log('successful Question add');
                res.send(dbRes);
            })
                .catch((err) => { console.log('error adding Question'); res.send(err); });
        });
    },
    markQuestionHelpful: (req, res) => {
        console.log('question.markQuestionHelpful()', req);
        res.send('question.markQuestionHelpful()');
    },
    markQuestionReported: (req, res) => {
        console.log('question.markQuestionReported()', req);
        res.send('question.markQuestionReported()');
    }
};
//# sourceMappingURL=question.js.map