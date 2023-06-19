// code your solution here
// Function to calculate the year when the Denver Broncos won the Super Bowl
function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }
  
  // Test suite using Mocha and Chai
  const chai = require('chai');
  const expect = chai.expect;
  
  describe('superbowlWin(record)', function() {
    const games = [
      { year: 2005, result: "L" },
      { year: 2008, result: "W" },
      { year: 2013, result: "L" },
      { year: 2017, result: "W" },
      { year: 2021, result: "W" }
    ];
  
    it('returns a year the Denver Broncos won the Super Bowl', function() {
      expect(superbowlWin(games)).to.equal(2008);
    });
  
    it('returns undefined if no win is found', function() {
      const noWins = [
        { year: 2005, result: "L" },
        { year: 2006, result: "L" },
        { year: 2007, result: "L" }
      ];
      expect(superbowlWin(noWins)).to.equal(undefined);
    });
  });
  