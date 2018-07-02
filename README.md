# Indecision App
Put your life in the hands of a computer

## Dependencies

    "babel-cli": "6.24.1",
    "babel-core": "6.25.0",
    "babel-loader": "7.1.1",
    "babel-plugin-transform-class-properties": "6.24.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "css-loader": "0.28.4",
    "live-server": "^1.2.0",
    "node-sass": "4.5.3",
    "normalize.css": "7.0.0",
    "react": "16.0.0",
    "react-dom": "16.0.0",
    "react-modal": "^3.4.5",
    "sass-loader": "6.0.6",
    "style-loader": "0.18.2",
    "validator": "^10.4.0",
    "webpack": "3.1.0",
    "webpack-dev-server": "2.5.1"
    
## Installation
1. To Install Nodejs, npm & yarn
##### On Ubuntu: 14.04 LTS

```bash
sudo apt-get update
```
Install Nodejs & npm

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Install Yarn
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

2. Install Dependencies
```bash
Indecision-App-React$ yarn install
```

## Commands
1. To start webpack dev-server
```bash
yarn run dev-server
```
2. To build using webpack
```bash
yarn run build
```
		
