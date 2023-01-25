import { Answer } from '../model/model.js';
export const answer = {
    all: (req, res) => {
        Answer.find({ question_id: Number(req.body.question_id) })
            .then((dbRes) => { console.log('response from db: ', dbRes); res.send(dbRes); })
            .catch((err) => { console.log('error fetching answers', err); res.send('error getting answers'); });
    },
    addAnswer: (req, res) => {
        // first get the num of Answers,
        console.log('body.params for addAnswer', req.query);
        Answer.find().sort({ id: -1 }).limit(1)
            .then((dbRes) => {
            dbRes[0].id++; // increment the total to create the new id
            new Answer({
                id: dbRes[0].id++,
                question_id: Number(req.params.question_id),
                body: req.body.body,
                date_written: Date.now() + "",
                answerer_name: req.body.name,
                answerer_email: req.body.email,
                reported: 0,
                helpful: 0,
            }).save()
                .then((dbRes) => {
                console.log('successful Answer add');
                res.send(dbRes);
            })
                .catch((err) => { console.log('error adding Answer'); res.send(err); });
        });
    },
    markAnswerHelpful: (req, res) => { console.log('answer.markAnswerHelpful()', req); res.send('answer.markAnswerHelpful()'); },
    markAnswerReported: (req, res) => { console.log('answer.markAnswerReported()', req); res.send('answer.markAnswerReported()'); }
};
//# sourceMappingURL=answer.js.map