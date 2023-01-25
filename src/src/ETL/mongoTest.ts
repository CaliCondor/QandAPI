import { Schema, model, connect } from 'mongoose';
// import papaparse from 'papaparse';
// import { readFileSync } from 'fs';
// const { parse } = papaparse;
// const file = readFileSync('../ETL/questionsTest.csv', 'utf8');
// parse(file, {complete: (result) => console.dir(result.data)});

// interface IProducts {
//   product_id: Number;
//   questions: String;
// }

// const productsSchema = new Schema<IProducts>({
//   product_id: {type: Number, required: true},
//   questions: {type: String, required: false}
// })


// interface IQuestions {
//   id: number;
//   product_id: number;
//   body: string;
//   date_written: string;
//   asker_name: string;
//   asker_email: string;
//   reported: number;
//   helpful: number;
// }

// const questionsSchema = new Schema<IQuestions>({
//   id: { type: Number, required: true },
//   product_id: { type: Number, required: true },
//   body: { type: String, required: true },
//   date_written: { type: String, required: true },
//   asker_name: { type: String, required: true },
//   reported: { type: Number, required: true },
//   helpful: { type: Number, required: true },
// })

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


// 3. Create a Model.
// const Product = model<IProducts>('Product', productsSchema);

// const Question = model<IQuestions>('Question', questionsSchema);

const Answer = model<IAnswers>('Answer', answersSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/SDCv2');

  // const product = new Product({
  //   product_id: 1,
  //   questions: 'fake question'
  // });

//   parse(file, {
// 	download: true,
// 	step: function(row) {
// 		console.log("Row:", row.data);
//     const question = new Question({
//     //   id: row[0],
//     //   product_id: ,
//     //   body: ,
//     //   date_written: ,
//     //   asker_name: ,
//     //   asker_email: ,
//     //   reported: ,
//     //   helpful:
//     // });
// 	},
// 	complete: function() {
// 		console.log("All done!");
// 	}
// });
  // await product.save();

  // console.log(product.questions); // 'fake question'
}
// const db = connection;
// export default db;

export { Answer }