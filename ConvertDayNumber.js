const ConvertDayNumber = (dayNumber) => {
  const days = {
    1: "دوشنبه",
    2: "سه‌شنبه",
    3: "چهارشنبه",
    4: "پنجشنبه",
    5: "جمعه",
    6: "شنبه",
    7: "یکشنبه",
  };

  dayNumber = parseInt(dayNumber);

  // Sometimes a user wants n days ago, not today.
  // But the dayNumber is less than 1 or greater than 7.
  while (dayNumber > 7) {
    dayNumber -= 7;
  }
  while (dayNumber < 1) {
    dayNumber += 7;
  }

  if (dayNumber in days) {
    return days[dayNumber];
  }
};

module.exports = ConvertDayNumber;
