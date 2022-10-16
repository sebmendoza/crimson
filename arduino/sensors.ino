#include <Encoder.h>
Encoder myEncRed(8,9);
Encoder myEncBlue(10, 11);
Encoder myEncGreen(0, 2);
Encoder myEncYellow(7, 12);

//Encoder myEncKnob(A3, A4);


const int redButtonPin = A5;
const int blueButtonPin = A4;
const int greenButtonPin = A3;
const int yellowButtonPin = A2;

//const int switchInput = A2;

const int knobButton = A5;
int red_light_pin = 4;
int green_light_pin = 5;
int blue_light_pin = 6;

long int oldPositionRed = -999;
long int newPositionRed;
long int oldPositionBlue = -999;
long int newPositionBlue;
long int oldPositionGreen = -999;
long int newPositionGreen;
long int oldPositionYellow = -999;
long int newPositionYellow;
long int oldPositionKnob = -999;
long int newPositionKnob;

int redButtonState = HIGH;
int blueButtonState = HIGH;
int greenButtonState = HIGH;
int yellowButtonState = HIGH;
//int switchState = HIGH;
int knobButtonState = HIGH;

void setup() {
  Serial.begin(9600);
  Serial.println("Encoder Positions:");

  pinMode(red_light_pin, OUTPUT);
  pinMode(green_light_pin, OUTPUT);
  pinMode(blue_light_pin, OUTPUT);
  pinMode(redButtonPin, INPUT);
  pinMode(blueButtonPin, INPUT);
  pinMode(greenButtonPin, INPUT);
  pinMode(yellowButtonPin, INPUT);
  //pinMode(switchInput, INPUT);
 // pinMode(knobButton, INPUT);
}

void loop() {

  

  redButtonState = digitalRead(redButtonPin);
  blueButtonState = digitalRead(blueButtonPin);
  greenButtonState = digitalRead(greenButtonPin);
  yellowButtonState = digitalRead(yellowButtonPin);
  //switchState = digitalRead(switchInput);
  knobButtonState = digitalRead(knobButton);

  if (redButtonState == LOW)
  {
    RGB_color(255, 0, 0);
    Serial.print(redButtonState);

    redButtonState = digitalRead(redButtonPin);
    Serial.print(redButtonState);
    delay(1000);
    redButtonState = 1;
    while (redButtonState == 1)
    {
      newPositionRed = myEncRed.read();
      redButtonState = digitalRead(redButtonPin);

      if (newPositionRed != oldPositionRed)
      {
        Serial.println(newPositionRed);
        oldPositionRed = newPositionRed;
        RGB_color(newPositionRed * 5, 0, 0);
      }
      if (newPositionRed * 5 >= 255)
      {
        RGB_color(255, 0, 0);
      }
      if (newPositionRed * 5 <= 1)
      {
        RGB_color(1, 0, 0);
      }
      
    }
    RGB_color(0, 0, 0);
    Serial.println("u");
    delay(1000);
  }

  if (blueButtonState == LOW)
  {
    RGB_color(0, 0, 250);
    Serial.println("HI");

    Serial.print(blueButtonState);

    blueButtonState = digitalRead(blueButtonPin);
    Serial.print(blueButtonState);
    delay(1000);
    blueButtonState = 1;
    
    while (blueButtonState == 1)
    {
      newPositionBlue = myEncBlue.read();
      blueButtonState = digitalRead(blueButtonPin);

      if (newPositionBlue != oldPositionBlue)
      {
        Serial.println(newPositionBlue);
        oldPositionBlue = newPositionBlue;
        RGB_color(0, 0, newPositionBlue);
      }
      if (newPositionBlue >= 255)
      {
        RGB_color(0, 0, 255);
      }
      if (newPositionBlue * 5 <= 1)
      {
        RGB_color(0, 0, 1);
      }
    }
    RGB_color(0, 0, 0);
    delay(1000);
  }

  if (greenButtonState == LOW)
  {
    RGB_color(0, 255, 0);
     Serial.println("HI");

    Serial.print(greenButtonState);

    greenButtonState = digitalRead(greenButtonPin);
    Serial.print(greenButtonState);
    delay(1000);
    greenButtonState = 1;
    while (greenButtonState == 1)
    {
      newPositionGreen = myEncGreen.read();
      greenButtonState = digitalRead(greenButtonPin);

      if (newPositionGreen != oldPositionGreen)
      {
        Serial.println(newPositionGreen);
        oldPositionGreen = newPositionGreen;
        RGB_color(0, newPositionGreen * 5, 0);
      }
      if (newPositionGreen * 5 >= 255)
      {
        RGB_color(0, 255, 0);
      }
      if (newPositionGreen * 5 <= 1)
      {
        RGB_color(0, 1, 0);
      }
    }
    RGB_color(0, 0, 0);
    delay(1000);
  }

  if (yellowButtonState == LOW)
  {
    RGB_color(255, 255, 0);
    Serial.print(yellowButtonState);

    yellowButtonState = digitalRead(yellowButtonPin);
    Serial.print(yellowButtonState);
    delay(1000);
    yellowButtonState = 1;
    while (yellowButtonState == 1)
    {
      newPositionYellow = myEncYellow.read();
      yellowButtonState = digitalRead(yellowButtonPin);

      if (newPositionYellow != oldPositionYellow)
      {
        Serial.println(newPositionYellow);
        oldPositionYellow = newPositionYellow;
        RGB_color(newPositionYellow * 5, newPositionYellow * 5, 0);
      }
      if (newPositionYellow * 5 >= 255)
      {
        RGB_color(255, 255, 0);
      }
      if (newPositionYellow * 5 <= 1)
      {
        RGB_color(1, 1, 0);
      }
    }
    RGB_color(0, 0, 0);
    delay(1000);
  }
}
/*
   if (knobButtonState == LOW)
    {
    Serial.print("Hi");
    delay(1000);
    }
    else
    {
    Serial.print("bilalisbeautiful");
    delay(1000);
    } */

/* newPositionKnob = myEncKnob.read();
  if (newPositionKnob < -80)
  {
    newPositionKnob = myEncKnob.read() + 81;
  }
  if (newPositionKnob  > 80)
  {
    newPositionKnob = myEncKnob.read() - 81;
  }
  if (newPositionKnob != oldPositionKnob)
  {
    Serial.println(newPositionKnob);
    Serial.println(myEncKnob.read());
    oldPositionKnob = newPositionKnob;
*/
  




void RGB_color(int red_light_value, int green_light_value, int blue_light_value)
{
  analogWrite(red_light_pin, red_light_value);
  analogWrite(green_light_pin, green_light_value);
  analogWrite(blue_light_pin, blue_light_value);
}