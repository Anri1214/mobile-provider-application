# Mobile Provider Application
This application is created as Front-End part for full app.

The main data content is:
- id: (number)
- providerName: (string)
- mcc: (string)
- mnc: (string)
- spns: (string array)
- imsi: (string array)

For detail information for each field you can read this: 
- (https://en.wikipedia.org/wiki/Mobile_country_code)
- (https://github.com/musalbas/mcc-mnc-table)
- (http://mcc-mnc.com/)

The client part allow to work with mobile providers data using server API:
- create
- read
- update
- delete
- filter data by fields
- detect providers list by spns + imsi 

## Getting Started

These instructions help you get a copy of the project and running on your local PC for continued development. 

### Installation and usage

Clone the repo:
```
$ git clone git@github.com:Anri1214/mobile-provider-application.git youFolderName
```

Go to dir:
```
$ cd youFolderName
```

Install all dependencies:
```
$ npm install
```

Run API server:
```
$ npm run apiserver
```

Start project:
```
$ npm run start
```

## Deployment

Build project:
```
$ npm run build
```

## Authors

* **[Andriy Kutsyk](https://github.com/Anri1214)**

## Tech stack

* javascript 
* html/css
* ECMA6
* scss
* webpack
* AngularJS 1.5.11
* Angular-Material 1.1.10
* lodash
* json-server
