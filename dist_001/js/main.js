$(document).ready(function() {
  var now = new Date();
  var launchDate = moment('2019-06-30');
  var timeUntilLuanch = launchDate.diff(now);

  var clock = $('.clock').FlipClock(timeUntilLuanch / 1000, {
    clockFace: 'DailyCounter',
    countdown: true
  });

  console.log(timeUntilLuanch);
  console.log(now);
});
