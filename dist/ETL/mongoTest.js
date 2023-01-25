var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model, connect } from 'mongoose';
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
// 3. Create a Model.
// const Product = model<IProducts>('Product', productsSchema);
// const Question = model<IQuestions>('Question', questionsSchema);
const Answer = model('Answer', answersSchema);
run().catch(err => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // 4. Connect to MongoDB
        yield connect('mongodb://localhost:27017/SDCv2');
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
    });
}
// const db = connection;
// export default db;
export { Answer };
//# sourceMappingURL=mongoTest.js.map