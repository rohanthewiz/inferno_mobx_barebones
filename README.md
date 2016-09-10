# Get started with a basic, but nicely working system as you learn InfernoJS

### There are very few steps to get you up and running

- You will need to have nodejs and npm already installed. Follow instructions at https://nodejs.org/
- Clone the project:
  `git clone https://github.com/rohanthewiz/inferno_barebones.git`
- Change to the repo directory  `cd inferno_barebones`
- Install project dependencies:  `npm install`
- npm install -g browserify`
- Compile `npm run build`
- If a .babelrc exists in project root containing `{ "presets": ["es2015"], "plugins": ["inferno"] }`
  you can run a shortened command: `browserify main.jsx -o index.js -t [ babelify ]`
- Start the server (you don't need to 'run' here): `npm start`
- View the output in your browser by navigating to `localhost:8081` (CTRL-C to exit the server)
- You are set! Find a good tutorial and start writing blazing fast Inferno apps!
 Start reading here: [github.com/trueadm/inferno](https://github.com/trueadm/inferno).
 You probably want to check out Mobx too https://github.com/nightwolfz/mobx-inferno


Thanks to [Geoforce](http://geoforce.com/ "World class asset tracking") for getting me started on the React ecosystem.
