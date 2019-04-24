const SwimTimes = require('../models/swim_times.js');

class Delete {

  constructor() {

    this.element = document.querySelector('#update-form');
    this.form = document.querySelector('#deleter');
    this.opaque = document.querySelector('#opacity');

  }

  bindEvents() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newEntry = {};
      newEntry.id = this.element.value;

      const newTime = new SwimTimes();
      newTime.deleteData(newEntry);
      this.form.reset();
      this.element.style.visibility = 'hidden';
      this.opaque.style.opacity = 1
      this.opaque.style.filter = 'brightness(100%)'
    })

  }
}

module.exports = Delete;
