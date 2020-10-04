Sample flow is [here](https://flows.nodered.org/flow/d3676a72de816a3c7ef97425d32f8731).

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

-----

# soracom_gps_multiunit
このノードは、<a href="https://soracom.jp/products/kit/gps_multiunit/" target="_new">GPSマルチユニット SORACOM Edition</a>から送られてきたJSON形式のデータを処理します。
ペイロードには、以下の情報が含まれます。詳細については、<a href="https://dev.soracom.io/jp/gps_multiunit/how-it-works/" target="_blank">このサイト</a>を参照してください。
<ul>
    <li>lat: 緯度 (度)</li>
    <li>lon: 経度 (度)</li>
    <li>bat: 電池ピクト (３段階、-1は充電中)</li>
    <li>rs: アンテナピクト (-1は圏外)</li>
    <li>temp: 温度 (摂氏)</li>
    <li>humi: 湿度 (％)</li>
    <li>x: 加速度 X (mG)</li>
    <li>y: 加速度 Y (mG)</li>
    <li>z: 加速度 Z (mG)</li>
    <li>0:定期送信・加速度割り込み 1:ボタン押下時の送信 -1:異常値</li>
</ul>
