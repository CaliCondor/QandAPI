import papaparse from 'papaparse';
// import Question from './mongoTest.js';
import {Answer} from './mongoTest.js';
import { createReadStream } from 'fs'; // removed readFileAsync for simplicity (after it didnt work with answers. it did work with questions)
const { parse } = papaparse;
const answersFile = createReadStream('../../rawCSVs/answers.csv', 'utf8'); // this changes according to what I am actually loading into my db
// const questionsFile = createReadStream('../../rawCSVs/questions.csv', 'utf8');
// removing the utf8 specification so that readFileSync returns a buffer not a string (string is throwing buffer error)
// parse(file, {complete: (result) => console.dir(result.data)});

// interface IQuestions {
//   id: number;
//   product_id: number;
//   body: string;
//   date_written: string;
//   asker_name: string;
//   asker_email: string;
//   reported: string;
//   helpful: string;
// }

interface IAnswers {
  id: number;
  question_id: number;
  body: string;
  date_written: string;
  answerer_name: string;
  answerer_email: string;
  reported: string;
  helpful: string;
}

// id,question_id,body,date_written,answerer_name,answerer_email,reported,helpful
// id,product_id,body,date_written,asker_name,asker_email,reported,helpful


// const tempArr:object[] = [];
const tempAArr:object[] = [];

/*

ETL for answers!

*/
console.log('made it to parse answers')
parse<IAnswers>(answersFile, { // trying to just read the local file, instead of assinging it to a variable at the top of the page first
	download: false,
	header: true,
	step: function(row) {
    let newA = {
      id: Number(row.data.id),
      question_id: Number(row.data.question_id),
      body: row.data.body,
      date_written: row.data.date_written,
      answerer_name: row.data.answerer_name,
      answerer_email: row.data.answerer_email,
      reported: Number(row.data.reported),
      helpful: Number(row.data.helpful)
    };
    // newQ.save()
      // instead of saving here, put newQ obj in my tempArr so that the async .save() calls dont build up.
      // THEN, upon completion, iterate over the tempArr, Modelify each, and use .save() one at time making use of async
    tempAArr.push(newA)
	},
	complete: function() {
		console.log("All done! Here is the length of the array of new answers objs :", tempAArr.length);
    // use an async function to loop over the gigantic array of objects, awaiting on the save to database each time.
    const asyncFunction = async () => {
      console.log('asyncFunciton triggered')
      for (let i = 0; i < tempAArr.length; i++) { // include some logging method to show me progress as it's happening
        if (i % 10000 === 0) {
          console.log(`logging benchmark reached in answers ETL, current i is ${i}`)
        }
        await new Answer (tempAArr[i]).save()
      }
    }
    asyncFunction();
    console.log('logging after async function')
  }
});



/*

ETL for questions!

*/


// console.log('made it to parse questions')
// parse<IQuestions>(questionsFile, {
// 	download: false,
// 	header: true,
// 	step: function(row) {
// 		// console.log("Row: ", row.data);
//     // console.log("Row at key asker_email ",row.data.asker_email)
//     let newQ = {
//       id: Number(row.data.id),
//       product_id: Number(row.data.product_id),
//       body: row.data.body,
//       date_written: row.data.date_written,
//       asker_name: row.data.asker_name,
//       asker_email: row.data.asker_email,
//       reported: Number(row.data.reported),
//       helpful: Number(row.data.helpful)
//     };
//     // newQ.save()
//       // instead of saving here, put newQ obj in my tempArr so that the async .save() calls dont build up.
//       // THEN, upon completion, iterate over the tempArr, Modelify each, and use .save() one at time making use of async
//     tempArr.push(newQ)
// 	},
// 	complete: function() {
// 		console.log("All done! Here is the length of the array of new question objs :", tempArr.length);
//     // use an async function to loop over the gigantic array of objects, awaiting on the save to database each time.
//     const asyncFunction = async () => {
//       console.log('asyncFunciton triggered')
//       for (let i = 0; i < tempArr.length; i++) { // include some logging method to show me progress as it's happening
//         if (i % 10000 === 0) {
//           console.log(`logging benchmark reached in questions ETL, current i is ${i}`)
//         }
//         await new Question (tempArr[i]).save()
//       }
//     }
//     asyncFunction();
//     console.log('logging after async function')
//   }
// });


