import Inferno from 'inferno';
import Component from 'inferno-component';
import {observable} from 'mobx';
import {observer} from "mobx-inferno";
import Todo from './todo.jsx';

var timerData = observable({
  secondsPassed: 0
});

setInterval(() => {
  timerData.secondsPassed++
}, 1000);


class App extends Component {
  render() {
    return (
      <div id="inferno_app">
        <h2>Inferno and Mobx - everyone's in the dust!</h2>
        <Todo
          todo={ {title: "Do this", body: "Yes, I really should do this"} }
          timer={timerData}
        />
      </div>)
  }
}

export default App
