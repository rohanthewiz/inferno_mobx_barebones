import Inferno from 'inferno';
import Component from 'inferno-component';
//when using a stateless component: //import createClass from 'inferno-create-class';
import {observer} from "mobx-inferno";

@observer
class Todo extends Component {
  render() {
    return (
      <div className="todo-item">
        <strong>{this.props.todo.title}</strong> <span>({this.props.timer.secondsPassed}) seconds overdue :-)</span>
        <div>{this.props.todo.body}</div>
      </div>
    )
  }
}

// Example of a Stateless Component
// const Todo = observer(props => (
//   <div className="todo-item">
//     <h4>{props.todo.title}</h4>
//     <div>{props.todo.body}</div>
//   </div>
// ));

export default Todo
