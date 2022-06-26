const convertDayName = (dayName) => {
  dayName = dayName.toLowerCase();
  if (dayName === "monday" || dayName === "mon") {
    return "دوشنبه";
  }
  if (dayName === "tuesday" || dayName === "tue") {
    return "سه‌شنبه";
  }
  if (dayName === "wednesday" || dayName === "wed") {
    return "چهارشنبه";
  }
  if (dayName === "thursday" || dayName === "thu") {
    return "پنج شنبه";
  }
  if (dayName === "friday" || dayName === "fri") {
    return "جمعه";
  }
  if (dayName === "saturday" || dayName === "sat") {
    return "شنبه";
  }
  if (dayName === "sunday" || dayName === "sun") {
    return "یکشنبه";
  }
  return false;
};

module.exports = convertDayName;
