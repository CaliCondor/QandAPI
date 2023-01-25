import { Schema, model, connect } from 'mongoose';
connect('mongodb://localhost:27017/SDCv2');
const questionsSchema = new Schema({
    id: { type: Number, required: true },
    product_id: { type: Number, required: true },
    body: { type: String, required: true },
    date_written: { type: String, required: true },
    asker_name: { type: String, required: true },
    reported: { type: Number, required: true },
    helpful: { type: Number, required: true },
});
const answersSchema = new Schema({
    id: { type: Number, required: true },
    question_id: { type: Number, required: true },
    body: { type: String, required: true },
    date_written: { type: String, required: true },
    answerer_name: { type: String, required: true },
    answerer_email: { type: String, required: true },
    reported: { type: Number, required: true },
    helpful: { type: Number, required: true },
});
const Question = model('Question', questionsSchema);
const Answer = model('Answer', answersSchema);
export { Question, Answer };
//# sourceMappingURL=model.js.map