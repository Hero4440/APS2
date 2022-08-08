function fromshipment() {
  var ship = document.querySelector("#shipmentid").value;
  // 5450000360
  fetch(
    `https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=5450000360`
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      console.log(jsdom);
    });

  // const jsdom = require("jsdom");
  // const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  // document.getElementById("output").textContent = data;
  // dom.window.document.getElementById("details").textContent; // 'Hello world'
  // let parser = new DomParser();
  // let xml = parser.parseFromString(data,"application/xml");
  // document.getElementById("output").textContent = data;
}
//https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=5450000360
