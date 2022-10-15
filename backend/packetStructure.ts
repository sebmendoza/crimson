/*
General message structure, will be modified when incoming data is analyzed.
*/

/**
 * The emotion possibilities and subsequent colours.
 */
export enum emotion {
    HAPPY = 'yellow',
    SAD = 'blue',
    ANGRY = 'red',
    BORED = 'green'
};

export enum action {
    HUNGRY = 'hungry',
    QUIET_TIME = 'quiet_time',
    PLAY_TIME = 'play',
    SLEEP = 'sleep'
}

/**
 * The base data structure for incoming packets.
 * 
 * @param id
 * A unique id string for the data point.
 * 
 * @param time
 * The time this interaction was recorded by the device.
 */
export interface baseDataPoint {
    id: string;
    time: string;
};

/**
 * The button data structure for incoming packets.
 * 
 * @param emotion
 * The emotion set by the user.
 * 
 * @param intensity
 * The intensity set by the user.
 */
export interface buttonDataPoint extends baseDataPoint {
    emotion: emotion;
    intensity: number;
}

/**
 * The knob data structure for incoming packets.
 * 
 * @param action
 * The action set by the user.
 */
export interface knobDataPoint extends baseDataPoint {
    action: action;
}

/**
 * The knob data structure for incoming packets.
 * 
 * @param interaction
 * The amount of interaction from the user.
 */
export interface dialDataPoint extends baseDataPoint {
    interection: string;
}

/**
 * The knob data structure for incoming packets.
 * 
 * @param value
 * The yes or no value set by the user.
 */
export interface switchDataPoint extends baseDataPoint {
    value: string;
}