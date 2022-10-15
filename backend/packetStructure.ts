/*
General message structure, will be modified when incoming data is analyzed.
*/

/**
 * The colour possibilities for buttons pressed.
 */
 export enum colour {
    RED = 'red',
    ORANGE = 'orange',
    YELLOW = 'yellow',
    GREEN = 'blue',
    BLUE = 'blue',
    PINK = 'pink',
    PURPLE = 'purple',
    BROWN = 'brown',
    BLACK = 'black',
};

/**
 * The emotion possibilities for the dial.
 */
export enum emotion {
    HAPPY = 'happy',
    SAD = 'sad',
    ANGRY = 'angry',
    SCARED = 'scared',
    EXCITED = 'excited',
    BORED = 'bored'
};

/**
 * The sensor possibilities from which the packet has been sent from.
 */
export enum sensor {
    BUTTON = 'button',
    DIAL = 'dial',
    GEAR = 'gear'
};

/**
 * The base data structure for incoming packets.
 * 
 * @param sensor
 * An enum to specify the sesnsor from which the data is being sent.
 * 
 * @param id
 * A unique id string for the data point.
 */
export interface baseDataPoint {
    sensor: sensor;
    id: string;
};

/**
 * An extension of the baseDataPoint for frequency packets.
 * 
 * @param amount
 * The number of actions.
 * 
 * @param time
 * The time in milliseconds since a previous packet has been sent from this sensor.
 * 
 * @param frequency
 * The frequency of actions per time.
 */
export interface freqDataPoint extends baseDataPoint {
    time: number;
    amount: number;
    frequency: number;
};

/**
 * An extension of the freqDataPoint for buttons.
 * 
 * @param colour
 * An enum to specify which colour was pressed.
 * 
 */
export interface buttonDataPoint extends freqDataPoint {
    colour: colour;
};

/**
 * An extension of the freqDataPoint for the gear.
 * 
 * @param direction
 * The direction the gear was turned in. 
 */
export interface gearDataPoint extends freqDataPoint {
    direction: number;
};

/**
 * An extension of the baseDataPoint for the dial.
 * 
 * @param emotion
 * The current emotion that the dial is set to.
 * 
 * @param prev_emotion
 * The previous emotion that the dial was set to.
 */
export interface dialDataPoint extends baseDataPoint {
    emotion: emotion;
    prev_emotion: emotion;
};
