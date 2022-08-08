function fromshipment() {
  var ship = document.querySelector("#shipmentid").value;
  // 5450000360
  fetch(
    `https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=5450000360`
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "text/xml");
      // document.getElementById("output").textContent = xml;
      console.log(xml.getElementsByTagName("a:BillingPartyName"));

      document.querySelector("#output").insertAdjacentHTML(
        "afterbegin",
        `
        <div>
        <table>
        <tr>
          <th><h5>Party Name
          </h5></th>
          <td>${
            xml.getElementsByTagName("a:BillingPartyName")[0].innerHTML
          }</td>
        </tr>  
        <tr>
        <th><h5>Booking Station
        </h5></th>
        <td>${xml.getElementsByTagName("a:BOOKING_STATION")[0].innerHTML}</td>
      </tr>   <tr>
      <th><h5>Weight
      </h5></th>
      <td>${xml.getElementsByTagName("a:ACTUAL_WEIGHT")[0].innerHTML}</td>
    </tr>   <tr>
    <th><h5>Assured Delivery Date
    </h5></th>
    <td>${xml.getElementsByTagName("a:ASSURED_DELIVERY_DATE")[0].innerHTML}</td>
  </tr>
  <tr>
  <th><h5>Booked date
  </h5></th>
  <td>${xml.getElementsByTagName("a:BOOKED_DATETIME")[0].innerHTML}</td>
</tr><tr>
<th><h5>Assured Delivery Date
</h5></th>
<td>${xml.getElementsByTagName("a:ASSURED_DELIVERY_DATE")[0].innerHTML}</td>
</tr><tr>
<th><h5>Assured Delivery Date
</h5></th>
<td>${xml.getElementsByTagName("a:ASSURED_DELIVERY_DATE")[0].innerHTML}</td>
</tr><tr>
<th><h5>Assured Delivery Date
</h5></th>
<td>${xml.getElementsByTagName("a:ASSURED_DELIVERY_DATE")[0].innerHTML}</td>
</tr>
       
</table>
        <h4>
        
        </h4>
        
           
              <a:BOOKED_DATETIME>09 Jul 22</a:BOOKED_DATETIME>
              
              <a:CONSIGNEE_NAME>SAME DEUTZ FAHR INDIA 9P0 LTD</a:CONSIGNEE_NAME>
              <a:CONSIGNOR_NAME>GHATGE PATIL</a:CONSIGNOR_NAME>
              <a:CURRENT_STATUS_CODE>8</a:CURRENT_STATUS_CODE>
              <a:DELIVERY_DATETIME>7/9/2022 12:00:00 AM</a:DELIVERY_DATETIME>
              <a:DELIVERY_STATION>APSRB-RANIPET</a:DELIVERY_STATION>
              <a:DOCKET_NUMBER>5450000360</a:DOCKET_NUMBER>
              <a:DOCKET_STATUS>
                Delivered @ APSRB On 09 Jul 22 - Rec. By -</a:DOCKET_STATUS
              >
              <a:Details>
                <a:ROW>
                  <a:ACTIVITY>Stock At Booking Location KOLHAPUR</a:ACTIVITY>
                  <a:ASDTDate>09 Jul 2022</a:ASDTDate>
                  <a:ASDTTime>09 Jul 2022 14:03:00:000</a:ASDTTime>
                  <a:DOCKNO>5450000360</a:DOCKNO>
                  <a:PODLink />
                  <a:Status i:nil="true" />
                  <a:TRACK_CODE>1</a:TRACK_CODE>
                  <a:sourcehb>APSKOP</a:sourcehb>
                  <a:tobh_code>APSRB</a:tobh_code>
                </a:ROW>
                <a:ROW>
                  <a:ACTIVITY>Intrasit between KOLHAPUR To RANIPET</a:ACTIVITY>
                  <a:ASDTDate>09 Jul 2022</a:ASDTDate>
                  <a:ASDTTime>09 Jul 2022 14:45:43:287</a:ASDTTime>
                  <a:DOCKNO>5450000360</a:DOCKNO>
                  <a:PODLink />
                  <a:Status i:nil="true" />
                  <a:TRACK_CODE>2</a:TRACK_CODE>
                  <a:sourcehb>APSKOP</a:sourcehb>
                  <a:tobh_code>APSRB</a:tobh_code>
                </a:ROW>
                <a:ROW>
                  <a:ACTIVITY>Arrived At RANIPET</a:ACTIVITY>
                  <a:ASDTDate>09 Jul 2022</a:ASDTDate>
                  <a:ASDTTime>09 Jul 2022 15:42:53:280</a:ASDTTime>
                  <a:DOCKNO>5450000360</a:DOCKNO>
                  <a:PODLink />
                  <a:Status i:nil="true" />
                  <a:TRACK_CODE>3</a:TRACK_CODE>
                  <a:sourcehb>APSRB</a:sourcehb>
                  <a:tobh_code i:nil="true" />
                </a:ROW>
                <a:ROW>
                  <a:ACTIVITY>Delivered At RANIPET</a:ACTIVITY>
                  <a:ASDTDate>09 Jul 2022</a:ASDTDate>
                  <a:ASDTTime>09 Jul 2022 00:00:00:000</a:ASDTTime>
                  <a:DOCKNO>5450000360</a:DOCKNO>
                  <a:PODLink />
                  <a:Status i:nil="true" />
                  <a:TRACK_CODE>5</a:TRACK_CODE>
                  <a:sourcehb>APSKOP</a:sourcehb>
                  <a:tobh_code>APSRB</a:tobh_code>
                </a:ROW>
              </a:Details>
              <a:FromCity>KOLHAPUR</a:FromCity>
              <a:InvoiceNo i:nil="true" />
              <a:ModeOfBooking>Road</a:ModeOfBooking>
              <a:NO_OF_PKGS>50.00</a:NO_OF_PKGS>
              <a:POD />
              <a:QuantityNo />
              <a:RECEIVER_NAME>Y</a:RECEIVER_NAME>
              <a:SERVICE_NAME />
              <a:ToCity>RANIPET</a:ToCity>
              <a:requid>5450000360</a:requid>
              <a:result>successful</a:result>
            </div>`
      );
    });

  // const jsdom = require("jsdom");
  // const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  // document.getElementById("output").textContent = data;
  // dom.window.document.getElementById("details").textContent; // 'Hello world'
  // let parser = new DomParser();
  // let xml = parser.parseFromString(data,"application/xml");
  // ` <div>${xml.getElementsByTagName("a:BillingPartyName")[0].innerHTML}
  // </div>
  // `
  // document.getElementById("output").textContent = data;
}
//https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=5450000360
