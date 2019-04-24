const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class SwimTimes {

  constructor() {

    this.data = null;

  }

  getData() {
    const url = 'http://localhost:3000/times';
    const request = new RequestHelper(url);
    request.get()
      .then((data) => {
        this.data = data;
        PubSub.publish('Swim-Times:DB-data-loaded', this.data);
      });
  }

  postData(entry) {
    const url = 'http://localhost:3000/times';
    const request = new RequestHelper(url);
    request.post(entry)
      .then((entries) => {
        PubSub.publish('Swim-Times:DB-data-loaded', entries);
      });
  }

  putData(entry) {
    console.log('the put data function is being called');
    console.log(entry);
    const url = 'http://localhost:3000/times';
    const request = new RequestHelper(url);
    request.put(entry)
      .then((entries) => {
        PubSub.publish('Swim-Times:DB-data-loaded', entries);
      });
  }

  deleteData(entry) {
    const url = 'http://localhost:3000/times';
    const request = new RequestHelper(url);
    request.delete(entry)
      .then((entries) => {
        PubSub.publish('Swim-Times:DB-data-loaded', entries);
      });
  }

}

module.exports = SwimTimes;
