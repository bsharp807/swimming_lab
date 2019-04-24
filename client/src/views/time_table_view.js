const PubSub = require('../helpers/pub_sub.js');

class TimeTable {

  constructor() {

    this.container = document.querySelector('#time-table');
    this.menu = document.querySelector('#update-form');
    this.opaque = document.querySelector('#opacity');

  }

  bindEvents() {
    PubSub.subscribe('Swim-Times:DB-data-loaded', (evt) => {
      const times = evt.detail;
      this.renderEvents(times);
    })
  }

  renderEvents(times) {
    this.clearTimes();

    times.forEach((time) => {
      const segment = this.createSection(time);
      this.container.appendChild(segment);
    })
  }

  clearTimes() {
    this.container.innerHTML = '';
  }

  createSection(time) {
    const detail = document.createElement('div');
    detail.classList = 'detail';
    detail.innerHTML = `${time.worldrecord}`;

    const title = document.createElement('div');
    title.classList = 'title';
    title.innerHTML = `${time.distance}m ${time.style} World Record:`

    const content = document.createElement('div');
    content.classList = 'content';

    const block = document.createElement('div');
    block.value = time.id;
    block.classList.add('block');
    block.id = 'block';

    content.appendChild(title);
    content.appendChild(detail);
    block.appendChild(content);
    block.addEventListener('click', (evt) => {
      this.menu.style.visibility = 'visible';
      this.opaque.style.opacity = 0.5;
      this.opaque.style.filter = 'brightness(50%)';
      this.menu.value = block.value;
    })

    return block;
  }

}

module.exports = TimeTable;
