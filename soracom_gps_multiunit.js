module.exports = function(RED) {
    "use strict";
    function SoracomGpsMultiunitNode(config) {
        RED.nodes.createNode(this,config);
        this.property = config.property || "payload";
        var node = this;
        node.on('input', function(msg) {
            var value = RED.util.getMessageProperty(msg, node.property);
            if (value !== undefined) {
                const base64buffer = Buffer.from(value.payload, 'base64');
                const decodedData = base64buffer.toString('ascii');
                msg.payload = JSON.parse(decodedData);
                node.send(msg);
            } else {
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("soracom_gps_multiunit", SoracomGpsMultiunitNode);
}
