const MDYtoDate = (M, D, Y) => (new Date(`${M}/${D}/${Y}`));

/**
 * @param startDate  the Date of the sunday at the beginning of the week
 * @param rolloverLimit  the number at which the current month ends, where the next month should begin
 * @returns Array<Date>  a 7 element array of Date objects, representing the gregorian calendar week
 */
export const weekGen = (startDate: Date, rolloverLimit = -1) {
  const week = [startDate];
  let prev = startDate;
  for (let i=0 ; i<6 ; i++) {
    const newDateObj = (moment(prev).add(1, 'day')).toDate();
    week.push(newDateObj);
    prev = newDateObj;
  }
  return week;
}
