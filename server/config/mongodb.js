const mongoCli = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const dbName = 'exchange';
const client = new mongoCli(url)
let db;
async function getDb(){
 try {
    db  = await new Promise((res, rej)=>{
        client.connect((e, cli)=>{
            if(e) {rej(e)}
            const db  = cli.db(dbName);
            console.log('connected mongodb')
            cli.close();
            res(db);
        })
     })
 } catch (e) {
     console.log('error in db connection: ',e);
 }
}
getDb()
module.exports = db;