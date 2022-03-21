const { google } = require('googleapis');
require('dotenv').config();

// Provide the required configuration
const CREDENTIALS = {
        type: "service_account",
        project_id: "possible-bolt-257414",
        private_key_id: "0e0848c1218ba7185334569494716802ca7d9f20",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaG6hAPuJhrFKd\nE+6x/w1eIwsGi7OrGfYSGfE44J7nR1zGGXayCV7MYx7SV7PZtNx1hDZcKTE7w087\nIF5Cb98zloJJSwtS0xW5rnLA2bUuk0v6L9eLo/JVlOmJMTPvm5hWKC98q2BmxgbQ\nhZyd6MjCn9jA5Aqgf2p/whzxr8mC4SlYWmrn4ChUUSg5Y81VPySILWZ6fLwisqAB\no+LBGKsmqAAUK38m9KyqMJMq91nhk7+gM0Qadj+S4MvFkQiIompe1CacAD2ByA0C\najOFyLbfqiyNoBqOZ8NoxexK430NS0xlYxd7SVvxA2R2NSA7gdUThEVftaRQ384f\nly8Jk3bLAgMBAAECggEAFDuPkpIizvu82Cxyrplh5JMsoSlRe/RXEtvMOEICC6Nf\nlFLlY2OiIySoxctz+CSidNZUcp0xn4EhNvNsOw6ErpTuNh1big3hzI1FwOURPSZV\n3HoWrTICt3Sua1cgocAV1Bw7N33wXehN1ocmfbGL+h347f/ZioT3XK2loLf1YgoU\nLCDaflymczTStEYLSX5yt51J1tI3ShvdoD9GrvleWqgzMPVeO4EZx3ybqLOf0fow\nN05UfVnEOzeFchGAOjfYXEvB8Cd7hyJMxKkaJPtR2Vy/T5X/hvja+ok0gU9jVxOE\nev0+9Y0Hxh0OsFYnYeGlClOmz8MfAhCcMtVK3OyNGQKBgQD8RmQM+gZueJ7zMmPD\nhhZ0+R4sIsdinW52Y17K5twfdUQ74zsUSpAG5OkY3KyJ8IiPRYiKDIYSi9WA/myr\noDoZct5camc1uPsCe4nAH12x8vNCmrLLbiJ1ULVTfP2EGH7E0Ca/aZ1Na+3mnckn\nbONWF5URrtPB1h6erB2DMwj0qQKBgQDdVB01Aut7ld5MelNTqpPdWXRwLIttANPp\ncJYHcMtHyqGxkotuwudBwjsnoiPMMIsWA/Eph5m+iPBbUqaHk2hwacFFN9VNJ1I8\nMh4LAk5Zro7XEfga7vzGXHEQ9f2Gp1MrfaqWOuWgcQwcEsqEkIHzGaJOORtfbegP\nyaaywX2EUwKBgBamSz1PBVzNv5eeIo7fbwy5gRf9V2FnOQ+wBEa7S3AXmzS1Rgyg\nVSYJT1RIG8WWruwOFiAu16q6m0SlkyQlkpHOWmB5vSJ5pS+n38o8BrF/Wo/US9Ev\n5jAaOu1v/2LowBjzh0cQOGtHEWjvKaw8fnywSVX5GFIC42TjlxK8dkVhAoGBANUH\n6TTlIpNJpTYnZ5zYSop7V7/AoFLCwTWn0EBJKOBpAUlRrDNoFf8NXLLBNYOMFdOS\n58T5Z9olJHRCEVfdYmEQ6Z4eJ4ijmFuoQZKHHbLkeUg5W31RGqwyvgF9RBEfbMYn\nptICzpKnPOiojZUbInlC6x4viVFJEFxh07mq041RAoGBAJLvVM994YjlF+BbjKwm\nRVotBP2o60h8mpRIDS9NgnM5AZq0TOX/xsHYQKg2Bt9VIFOUw7gZ3Pkf9rA5OEj9\n3MSbWqD0morml8SQpk9NUoYNBMk8GFPUxRCNpJKFliNoAWyuH+aog+qjj03NL24S\n21aBYuKmfHY6L7hxwa3T3rj5\n-----END PRIVATE KEY-----\n",
        client_email: "demo-calendar@possible-bolt-257414.iam.gserviceaccount.com",
        client_id: "118290787950737933197",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/demo-calendar%40possible-bolt-257414.iam.gserviceaccount.com"
    }
    //const calendarId = process.env.CALENDAR_ID;
const calendarId = "osti.katriel@gmail.com" //"818gk7q54vofcqvv3jrsiosj9g@group.calendar.google.com"
    // Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);

// Your TIMEOFFSET Offset
const TIMEOFFSET = '+05:30';

// Get date-time string for calender
const dateTimeForCalander = () => {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1));

    return {
        'start': startDate,
        'end': endDate
    }
};

// Insert new event to Google Calendar
const insertEvent = async(event) => {

    try {
        let response = await calendar.events.insert({
            auth: auth,
            calendarId: calendarId,
            resource: event
        });

        if (response['status'] == 200 && response['statusText'] === 'OK') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
};

let dateTime = dateTimeForCalander();

// Event for Google Calendar
let event = {
    'summary': `This is the summary.`,
    'description': `This is the description.`,
    'start': {
        'dateTime': dateTime['start'],
        'timeZone': 'Asia/Kolkata'
    },
    'end': {
        'dateTime': dateTime['end'],
        'timeZone': 'Asia/Kolkata'
    }
};

insertEvent(event)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Get all the events between two dates

const getEvents = async(dateTimeStart, dateTimeEnd) => {

    try {
        let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/Kolkata'
        });

        let items = response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents --> ${error}`);
        return 0;
    }
};

let start = '2022-01-03T00:00:00.000Z';
let end = '2022-10-04T00:00:00.000Z';

getEvents(start, end)
    .then((res) => {
        console.log('List events:', res);
    })
    .catch((err) => {
        console.log(err);
    });

// Delete an event from eventID
/*
const deleteEvent = async(eventId) => {

    try {
        let response = await calendar.events.delete({
            auth: auth,
            calendarId: calendarId,
            eventId: eventId
        });

        if (response.data === '') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at deleteEvent --> ${error}`);
        return 0;
    }
};

let eventId = 'hkkdmeseuhhpagc862rfg6nvq4';

deleteEvent(eventId)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
*/