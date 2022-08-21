function fromshipment() {
  var ship = document.querySelector("#shipmentid").value;
  console.log(ship);
  // 5450000360
  fetch(
    `https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=${ship}`
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "text/xml");
      // document.getElementById("output").textContent = xml;
      console.log(xml.getElementsByTagName("a:BillingPartyName"));
      if (xml.getElementsByTagName("a:result")[0].innerHTML == "successful") {
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
          </tr>  <tr>
          <th><h5>Consignee Name
          </h5></th>
          <td>${xml.getElementsByTagName("a:CONSIGNEE_NAME")[0].innerHTML}</td>
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
      <td>${
        xml.getElementsByTagName("a:ASSURED_DELIVERY_DATE")[0].innerHTML
      }</td>
    </tr>
    <tr>
    <th><h5>Booked date
    </h5></th>
    <td>${xml.getElementsByTagName("a:BOOKED_DATETIME")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Consignee_name
  </h5></th>
  <td>${xml.getElementsByTagName("a:CONSIGNOR_NAME")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Delivery Date
  </h5></th>
  <td>${xml.getElementsByTagName("a:DELIVERY_DATETIME")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Delivery Station
  </h5></th>
  <td>${xml.getElementsByTagName("a:DELIVERY_STATION")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Docket number
  </h5></th>
  <td>${xml.getElementsByTagName("a:DOCKET_NUMBER")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Docket Status
  </h5></th>
  <td>${xml.getElementsByTagName("a:DOCKET_STATUS")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Delivery Station
  </h5></th>
  <td>${xml.getElementsByTagName("a:DELIVERY_STATION")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>From City
  </h5></th>
  <td>${xml.getElementsByTagName("a:FromCity")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>Mode Of Booking
  </h5></th>
  <td>${xml.getElementsByTagName("a:ModeOfBooking")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>No. of PKGS
  </h5></th>
  <td>${xml.getElementsByTagName("a:NO_OF_PKGS")[0].innerHTML}</td>
  </tr><tr>
  <th><h5>To City
  </h5></th>
  <td>${xml.getElementsByTagName("a:ToCity")[0].innerHTML}</td>
  </tr>
  
  </table>
  
  <a:InvoiceNo i:nil="true" />
  <a:POD />
  <a:QuantityNo />
  <a:RECEIVER_NAME>Y</a:RECEIVER_NAME>
  <a:SERVICE_NAME />
  <a:ToCity>RANIPET</a:ToCity>
  <a:CURRENT_STATUS_CODE>8</a:CURRENT_STATUS_CODE>
  <a:requid>5450000360</a:requid>
             <a:result>successful</a:result>
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
               
              </div>`
        );
      } else {
        document.querySelector("#output").insertAdjacentHTML(
          "afterbegin",
          `
          <div>
    <h3>Wrong Shipment Id !</h3>
              </div>`
        );
      }
    });
}
//https://blooming-wildwood-32150.herokuapp.com/http://103.153.58.113/APSTranslinesDataService/AndroidServices.svc/GeneralTracking_API_xml?dktno=5450000360
