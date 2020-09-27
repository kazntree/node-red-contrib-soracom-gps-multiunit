# soracom_gps_multiunit
This node parses JSON data which was sent from <a href="https://soracom.jp/products/kit/gps_multiunit/" target="_new">SORACOM GPS multiunit</a> and is encoded by base64.
Payload data contain the following information. Please refer to <a href="https://dev.soracom.io/jp/gps_multiunit/how-it-works/" target="_blank">this site</a> for more details.
<ul>
    <li>lat: Latitude (degree)</li>
    <li>lon: Longitude (degree)</li>
    <li>bat: Battery pictogram (three levels, -1 for charging)</li>
    <li>rs: Antenna pictogram (-1 for no signal)</li>
    <li>temp: Temperature (celsius)</li>
    <li>humi: Humidity (%)</li>
    <li>x: Acceleration X (mG)</li>
    <li>y: Acceleration Y (mG)</li>
    <li>z: Acceleration Z (mG)</li>
    <li>type: 0:Scheduled transmission/Acceleration event, 1:Button push, -1:Unexpected value</li>
</ul>
