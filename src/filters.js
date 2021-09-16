import numeral from "numeral";

const dollarFilter = function (val) {
  if (!val) {
    return "$ 0";
  }
  return numeral(val).format("($ 0.00a)");
};

const percenFilter = function (val) {
  if (!val) {
    return "0%";
  }

  return `${Number(val).toFixed(2)}%`;
};
export { dollarFilter, percenFilter };
