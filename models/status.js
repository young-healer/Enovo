const sqlite3 = require('sqlite3').verbose();
// const moment = require('moment');


class Status {
  constructor() {
    this.db = new sqlite3.Database('./test.db', (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to database');
        // const stmt = this.db.prepare("INSERT INTO Status VALUES (?,?,?,?,?,?,?,?,?,?)");
        // for (let i = 1; i < 15; i++) {
        //   if( i < 8) {
        //     let ts = +moment(moment().subtract(8-i, 'days')).format('X');
        //     stmt.run('status_' + i,'process_status_'+ i,'group_status_'+ i,'kind_status_'+ i,'task_status_'+ i,'msg_status_'+ i,'target_status_'+ i,'time_status_'+ i, ts,'status_status_'+ i);
        //   } else {
        //     let ts = +moment().format('X') + 8399*(8-i);
        //     stmt.run('status_' + i,'process_status_'+ i,'group_status_'+ i,'kind_status_'+ i,'task_status_'+ i,'msg_status_'+ i,'target_status_'+ i,'time_status_'+ i, ts,'status_status_'+ i);
        //   }
        // }
        // stmt.finalize();

      }
    })
  }

  getAll(params = []) {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM Status", params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + "SELECT * FROM Status");
          console.log(err);
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

  getStatusByTS(timestamp) {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM Status WHERE ts BETWEEN ${timestamp} AND ${timestamp + 86400}`, [], (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + "SELECT * FROM Status");
          console.log(err);
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

module.exports = Status;

