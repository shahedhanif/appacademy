  /*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if you drank water 4 or more days in each calendar week.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks, 
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days for every week in the calendar,
then return true. Otherwise, return false.


*/

function adequateWaterTracker(calendar) {
  for (let i = 0; i < calendar.length; i++) {
    const week = calendar[i];
    let water = 0; // Count of days with water consumption for this week

    for (let j = 0; j < week.length; j++) {
      const day = week[j];
      if (day > 0) {
        water++;
      }
    }

    if (water < 4) {
      return false; // If any week has less than 4 days with water, return false
    }
  }

  return true; // If all weeks have 4 or more days with water, return true
}

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true