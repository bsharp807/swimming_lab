const SwimTimes = require('../models/swim_times.js');

class UpdateTime {

  constructor() {

    this.element = document.querySelector('#update-form');
    this.form = document.querySelector('#updater');
    this.opaque = document.querySelector('#opacity');

  }

  bindEvents() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newEntry = {};
      newEntry.id = this.element.value;
      newEntry.style = evt.target.style.value;
      newEntry.distance = evt.target.distance.value;
      newEntry.worldrecord = evt.target.record.value;

      const newTime = new SwimTimes();
      newTime.putData(newEntry);
      this.form.reset();
      this.element.style.visibility = 'hidden';
      this.opaque.style.opacity = 1
      this.opaque.style.filter = 'brightness(100%)'
    })

  }
}

module.exports = UpdateTime;
