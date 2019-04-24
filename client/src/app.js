const SwimTimes = require('./models/swim_times.js');
const TimeTable = require('./views/time_table_view.js');
const EntryTime = require('./views/entry_time_view.js');
const UpdateTime = require('./views/update_form_view.js');
const Delete = require('./views/delete_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const swimTimes = new SwimTimes();

  const entryTime = new EntryTime();
  entryTime.bindEvents();

  const updateTime = new UpdateTime();
  updateTime.bindEvents();

  const timeTable = new TimeTable();
  timeTable.bindEvents();

  const deleter = new Delete();
  deleter.bindEvents();


  swimTimes.getData();



});
