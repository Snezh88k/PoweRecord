var titleToNumber = function (columnTitle) {
  let a = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  if (columnTitle.length === 1) {
    return a.indexOf(columnTitle) + 1;
  } else {
    for (let i = columnTitle.length - 1; i > 0; i--) {
      return a.indexOf(columnTitle[0]) * 26 + a.indexOf(columnTitle[i]);
    }
  }
};

console.log(titleToNumber("AA"));
