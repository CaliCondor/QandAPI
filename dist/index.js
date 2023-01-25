// create an express server using typescript
// this server will recieve and route requests from the front end, mimicking the API for FEC.
// the server should establish our routes, and listen on a specified port
import { question } from './controller/question.js';
import { answer } from './controller/answer.js';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
var app = express();
var port = process.env.PORT || 3005;
// console.log('logging process.env', process.env, 'process.env.PORT :', port)
// MIDDLEWARE
app.use(express.json()); // enables req.body
// set up routing accordingly
app.get('/', (req, res) => { console.log('site reached', res.send('Hello World')); });
app.get('/qa/questions', (req, res) => { question.all(req, res); });
app.get('/qa/questions/:question_id/answers', (req, res) => { answer.all(req, res); });
app.post('/qa/questions', (req, res) => { question.addQuestion(req, res); });
app.post('/qa/questions/:question_id/answers', (req, res) => { answer.addAnswer(req, res); });
app.put('/qa/questions/:question_id/helpful', (req, res) => { question.markQuestionHelpful(req, res); });
app.put('/qa/questions/:question_id/report', (req, res) => { question.markQuestionReported(req, res); });
app.put('/qa/answers/:answer_id/helpful', (req, res) => { answer.markAnswerHelpful(req, res); });
app.put('/qa/answers/:answer_id/report', (req, res) => { answer.markAnswerReported(req, res); });
// listen on port
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map