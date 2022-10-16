#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

//    CONSTANTS
//    --------------------------------------
#define WIFI_SSID "CALSLENOVO"
#define WIFI_PASSWORD "iamanidiot"
#define API_KEY "ptMtAxuKMII57B3jl1RcDyKxCOpcjgKKdjBlvuIi"
#define USER_EMAIL "b32ali@uwaterloo.ca"
#define USER_PASSWORD "device"
#define DATABASE_URL "crimsoncrashers-default-rtdb.firebaseio.com"


//    FIREBASE GLOBALS
//    --------------------------------------
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// NTPCLIENT FOR TIME
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

// INPUT VARIABLES

const int yState = D0;
const int rState = D1;
const int bState = D2;
const int gState = D6;
int switchState = 0;
int switchState2 = 0;
const int knobButton(D5);


// OUTPUT VARIABLES
const int rPin = 0;
const int gPin = 1;
const int bPin = 2;

void setup()
{
  Serial.begin(115200);

  //  WIFI-SETUP
  //  --------------------------------------
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected..!");
  Serial.print("Got IP: ");  
  Serial.println(WiFi.localIP());

  //    CONFIGURE FIREBASE
  //    --------------------------------------
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;
  config.signer.test_mode = true;
  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);
  Firebase.begin(&config, &auth);

  // INPUT INITIALIZATION
  pinMode(yState, INPUT);
  pinMode(rState, INPUT);
  pinMode(bState, INPUT);
  pinMode(gState, INPUT);
  pinMode(switchState, INPUT);
  pinMode(knobButton, INPUT);

  // OUTPUT INITIALIZATION
  //  pinMode(rPin, OUTPUT);
  //  pinMode(gPin, OUTPUT);
  //  pinMode(bPin, OUTPUT);

  // INITIALIZE NTPCLIENT
  String dateInfo;
  timeClient.begin();
  timeClient.setTimeOffset(-14400);
}

void loop() {
    if (digitalRead(yState) == HIGH) {
      Serial.println("HERE3");
      buttonJSON("yellow", intensity("yellow", yState));
    } else if (digitalRead(rState) == HIGH) {
      Serial.println("HERE4");
      buttonJSON("red", intensity("red", rState));
      Serial.println("HEREafterred");
    } else if (digitalRead(bState) == HIGH) {
      buttonJSON("blue", intensity("blue", bState));
    } else if (digitalRead(gState) == HIGH) {
      buttonJSON("green", intensity("green", gState));
    } else if (digitalRead(switchState) != switchState2) {
      Serial.println("HERE SWITCH");
      if (switchState == HIGH) {
        switchJSON("yes");
      } else {
        switchJSON("no");
      }
      switchState2 = digitalRead(switchState);
    } else if (digitalRead(knobButton) == HIGH) {
      knobJSON(knobAction());
    }  
}

int intensity(String type, int pin) {
  int value = 0;
  int oldPos = -999;
  int state = 1;
  if (state = 1) {
    state = 2;
    int newPos = 0;
    if (newPos != oldPos) {
      Serial.println(newPos);
      oldPos = newPos;
      if (newPos * 5 >= 255) {
        value = 255;
      } else if (newPos * 5 <= 1) {
        value = 1;
      } else {
        value = newPos * 5;
      }
      //RGB_color(0, 0, value);
    }
  }
  return value;
}

void RGB_color(int rValue, int gValue, int bValue)
{
  Serial.println("HERE9");
  analogWrite(rPin, rValue);
  analogWrite(gPin, gValue);
  analogWrite(bPin, bValue);
  Serial.println("HERE10");
}

String knobAction() {
  Serial.println("knob");
  return "hungry";
}

String dateAndTime() {
  timeClient.update();

  time_t epochTime = timeClient.getEpochTime();
  String formattedTime = timeClient.getFormattedTime();

  //TIME STRUCTURE
  struct tm *ptm = gmtime ((time_t *)&epochTime);

  int monthDay = ptm->tm_mday;
  int currentMonth = ptm->tm_mon + 1;
  int currentYear = ptm->tm_year + 1900;

  //Print complete date:
  String currentDate = String(currentYear) + "-" + String(currentMonth) + "-" + String(monthDay);
  String dateAndTime = currentDate + " " + formattedTime;
  Serial.print("Current date and time: ");
  Serial.println(dateAndTime);
  Serial.println("");

  return dateAndTime;
}

void buttonJSON(String colour, int intensity) {
  FirebaseJson json;
  json.set("sensor", "button");
  json.set("time", dateAndTime());
  json.set("emotion", colour);
  json.set("intensity", intensity);
  firebasePush("/device/", json);
}

void knobJSON(String action) {
  FirebaseJson json;
  json.set("sensor", "knob");
  json.set("time", dateAndTime());
  json.set("action", action);
  firebasePush("/device/", json);
}

void dialJSON() {
  FirebaseJson json;
  json.set("sensor", "dial");
  json.set("time", dateAndTime());
  json.set("interaction", "--");
  firebasePush("/device/", json);
}

void switchJSON(String state) {
  FirebaseJson json;
  json.set("sensor", "switch");
  json.set("time", dateAndTime());
  json.set("value", state);
  firebasePush("/device/", json);
}

void firebasePush(char path[], FirebaseJson json) {
  Serial.printf("Add to database... %s\n", Firebase.pushJSON(fbdo, path, json) ? "ok" : fbdo.errorReason().c_str());
}
