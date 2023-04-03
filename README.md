# Project Title
React Single Page Application demo that uses Github Gist API to show all public gists for an user.

## Description
ReactJS Single Page App demo which has the following features:
Search: When a user enters a username, it should be able to get a full list of public gists by that user.


## Libraries/Components used
* create-react-app: Starter kit to create a reactjs app.
* Antd css: For styling and basic layout.
* react-router-dom (4.3.1): For routing between the search results screen and the detail screen.
* For api calls I am using the fetch() method, which returns a Promise.

## Getting Started and Installing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

* First Git clone the repo into your computer
```
git clone https://github.com/shireen-code/GitHubSearch.git
```
* Open your terminal
```
$ cd react-gist-demo
$ npm install
```
* This should install all the dependencies. Once done
* Run 
``` 
$ yarn start
or
$ npm start
```
* to start the server.
* open (http://localhost:3000) in your browser. 
* This should open up the Demo App


## Gif Demo
![Demo](https://github.com/shireen-code/GitHubSearch/blob/main/gif.gif)

#### Generating a Production build
```
$ cd react-gist-demo
$ npm run build
or
$ yarn build
```

## Possible Improvements
* Pagination for large result set.
* Better Styling may be.
* Unit Tests - JEST & Enzyme.

## Authors
* **shireen-code** - (https://github.com/shireen-code)

## License
This project is licensed under the MIT License
