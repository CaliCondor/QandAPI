import { Schema, model, connect } from 'mongoose';

connect('mongodb://localhost:27017/SDCv2')

interface IQuestions {
  id: number;
  product_id: number;
  body: string;
  date_written: string;
  asker_name: string;
  asker_email: string;
  reported: number;
  helpful: number;
}

const questionsSchema = new Schema<IQuestions>({
  id: { type: Number, required: true },
  product_id: { type: Number, required: true },
  body: { type: String, required: true },
  date_written: { type: String, required: true },
  asker_name: { type: String, required: true },
  reported: { type: Number, required: true },
  helpful: { type: Number, required: true },
})

interface IAnswers {
  id: number;
  question_id: number;
  body: string;
  date_written: string;
  answerer_name: string;
  answerer_email: string;
  reported: number;
  helpful: number;
}

const answersSchema = new Schema<IAnswers>({
  id: { type: Number, required: true },
  question_id: { type: Number, required: true },
  body: { type: String, required: true },
  date_written: { type: String, required: true },
  answerer_name: { type: String, required: true },
  answerer_email: { type: String, required: true },
  reported: { type: Number, required: true },
  helpful: { type: Number, required: true },
})


const Question = model<IQuestions>('Question', questionsSchema);
const Answer = model<IAnswers>('Answer', answersSchema);

export { Question, Answer }

