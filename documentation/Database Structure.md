# Database Schema
Since Firebase's realtime database is a NoSQL, there isn't any schema defined. I think.

In any case, this page will document the database schema for dev use.

## User
```java
// Somehow will be handled by firebase auth
String name
String email
```

## Location
```java
User user
String description
String address
String lat, lon
```

## NomEvent
```java
Location location
User host
String name
DateTime start
DateTime end
float cost
int minPax
String description
```

## NomEventPic
```java
NomEvent event
String caption
String link // Unsure how to handle
```

## RSVP
```java
NomEvent event
User attendee
Status status // ['Attending', 'Cancelled']
```