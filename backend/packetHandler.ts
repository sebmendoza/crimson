/*
General structure of how messages will be handled and stored in the server for use in front-end applications.
*/

// import mongodb
import { colour, emotion, sensor } from "./packetStructure";
import { baseDataPoint, freqDataPoint, buttonDataPoint, gearDataPoint, dialDataPoint } from "./packetStructure";

/**
 * Start up listening for messages from the miccrocontroller.
 */
export class initiateConnection {
constructor(ip: string) {
this.ip_m = ip;
}
private ip_m: string;
};

/**
 * Stop listening for messages and clean up.
 */
export class terminateConnection {
};

/**
 * Receive the packets.
 */
export class receivePackets {
};

/**
 * Parse the messages and send data to the server. 
 */
export class parseData {
};