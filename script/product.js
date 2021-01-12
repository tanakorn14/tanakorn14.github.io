$(document).ready(function () {
  const dogPrice = $("#dog-price");
  const price = dogPrice.text();
  const newPrice = price.split(" ");
  const priceInInt = parseFloat(newPrice[0]);

  const interestZero = $("#interest-zero");
  const interestFour = $("#interest-four");
  const interestEight = $("#interest-eight");
  const durationPay = $("#duration-pay");
  const interest = $("#interest-month");
  const mortage = $("#interest-mortage");
  const totalPay = $("#total-pay");
  const totalPayMonth = $("#total-pay-month");
  const productPrice = $("#dog-price").html();

  interestZero.focus();
  durationPay.text("Pay in: 12 Months");
  interest.text(`Interest Per Month: ฿0`);
  mortage.text("Total interest during mortage: ฿0");
  var totalPayInMonth = (priceInInt / 12).toFixed(2);
  totalPayMonth.text(`Total Payment/month: ฿${addCommas(totalPayInMonth)}`);

  interestZero.click(function () {
    durationPay.text("Pay in: 12 Months");
    interest.text(`Interest Per Month: ฿0`);
    mortage.text("Total interest during mortage: ฿0");
    totalPay.text(`Total Payment: ฿${addCommas(priceInInt)}`);
    var totalPayInMonth = (priceInInt / 12).toFixed(2);
    totalPayMonth.text(`Total Payment/month: ฿${addCommas(totalPayInMonth)}`);
  });
  interestFour.click(function () {
    var interestPerMonth = ((priceInInt * 0.04) / 24).toFixed(2);
    var interestPerMortage = (interestPerMonth * 24).toFixed(2);
    var totalPayment = parseFloat(interestPerMortage) + priceInInt;
    totalPayInMonth = (totalPayment / 24).toFixed(2);
    durationPay.text("Pay in: 24 Months");
    interest.text(`Interest Per Month: ฿${interestPerMonth}`);
    mortage.text(
      `Total interest during mortage: ฿${addCommas(interestPerMortage)}`
    );
    totalPay.text(`Total Payment: ฿${addCommas(totalPayment)}`);
    totalPayMonth.text(`Total Payment/month: ฿${addCommas(totalPayInMonth)}`);
  });
  interestEight.click(function () {
    interestPerMonth = ((priceInInt * 0.08) / 36).toFixed(2);
    interestPerMortage = (interestPerMonth * 36).toFixed(2);
    totalPayment = parseFloat(interestPerMortage) + parseFloat(priceInInt);
    totalPayInMonth = (totalPayment / 36).toFixed(2);
    durationPay.text("Pay in: 36 Months");
    interest.text(`Interest Per Month: ฿${interestPerMonth}`);
    mortage.text(
      `Total interest during mortage: ฿${addCommas(interestPerMortage)}`
    );
    totalPay.text(`Total Payment: ฿${addCommas(totalPayment)}`);
    totalPayMonth.text(`Total Payment/month: ฿${addCommas(totalPayInMonth)}`);
  });
});


function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}