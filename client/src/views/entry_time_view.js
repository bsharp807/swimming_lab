const SwimTimes = require('../models/swim_times.js');

class EntryTime {

  constructor() {

    this.element = document.querySelector('#entry-form');

  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newEntry = {};
      newEntry.style = evt.target.style.value;
      newEntry.distance = evt.target.distance.value;
      newEntry.worldrecord = evt.target.record.value;

      const newTime = new SwimTimes();
      newTime.postData(newEntry);

      this.element.reset();
    })

  }

}

module.exports = EntryTime;
