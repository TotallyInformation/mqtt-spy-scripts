// Remove the retain flag from a load of topics
// Author: Julian Knight (Totally Information)
// @see https://github.com/eclipse/paho.mqtt-spy/wiki/Scripting

// Wrap the script in a method, so that you can do "return false;" in case of an error or stop request
function publish() {
	//mqtt.publish(topic, stringPayload);
	//mqtt.publish(topic, stringPayload, qos, retained);
	//mqtt.publish(topic, binaryPayload, qos, retained);
	
	var Thread = Java.type("java.lang.Thread");
	
	// Define an array for topics we want to process
	var topics = [
		'homie/D1M1/temperature/temperature',
		'homie/D1M1/humidity/light',
		'homie/D1M1/temperature/$type',
		'homie/D1M1/sensors/heatindex',
		'homie/D1M1/$implementation',
		'homie/D1M1/$implementation/ota/enabled',
		'homie/D1M1/light/light',
		'homie/D1M1/$nodes',
		'homie/D1M1/$stats/uptime',
		'homie/D1M1/sensors/dewpoint',
		'homie/D1M1/humidity/unit',
		'homie/D1M1/$localip',
		'homie/D1M1/$mac',
		'homie/D1M1/$fw/version',
		'homie/D1M1/$stats/signal',
		'homie/D1M1/temperature/$properties',
		'homie/D1M1/$online',
		'homie/D1M1/$stats/interval',
		'homie/D1M1/$homie',
		'homie/D1M1/$uptime',
		'homie/D1M1/light/unit',
		'homie/D1M1/$implementation/version',
		'homie/D1M1/sensors/$properties',
		'homie/D1M1/humidity/$type',
		'homie/D1M1/temperature/unit',
		'homie/D1M1/humidity/humidity',
		'homie/D1M1/$implementation/config',
		'homie/D1M1/$fw/checksum',
		'homie/D1M1/sensors/light',
		'homie/D1M1/$signal',
		'homie/D1M1/sensors/temperature',
		'homie/D1M1/temperature/degrees',
		'homie/D1M1/$fwversion',
		'homie/D1M1/$fwname',
		'homie/D1M1/$name',
		'homie/D1M1/sensors/humidity',
		'homie/D1M1/sensors/$type',
		'homie/D1M1/$fw/name',
		'homie/D1M1/light/$type'
	];

	// Loop through each topic
	topics.forEach(function(topic) {
		// Publish blank payload with retain false
		// removes retained messages (should really send a null byte)
		mqttspy.publish(topic, "", 0, false);

		// Add some sleepy time and allow
		// mqtt_spy to interrupt if needed
		try {
			Thread.sleep(1000);
		} catch(err) {
			return false;
		}
	});
	
	// This means all OK, script has completed without any issues and as expected
	// return false if needed
	return true;
}

publish();

//EOF
