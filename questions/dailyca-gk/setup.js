// ============================================================
//  DAILY CA & GK — SETUP FILE
//  This file MUST load before january.js...december.js.
//  It just creates the shared "shell" object that each month
//  file below will fill in with its own quizzes.
//
//  EVERY NEW YEAR: change the year number below, and make sure
//  each month file (january.js...december.js) is emptied back
//  to an empty [] list to start the new year fresh.
// ============================================================

const DAILY_CA_GK = {
  year: 2026,
  months: {
    January: [], February: [], March: [], April: [], May: [], June: [],
    July: [], August: [], September: [], October: [], November: [], December: []
  }
};
