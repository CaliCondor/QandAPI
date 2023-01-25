// this is where i will create and establish my db connection to be used in my either my controllers or in my models
import { connect } from 'mongoose';
export default connect('mongodb://localhost:27017/SDC'); // change to v2 once the second ETL is completed
//# sourceMappingURL=db.js.map