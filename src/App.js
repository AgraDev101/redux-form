import style from './App.module.scss';
import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
import FormFill from './components/formfill';
// import { useSelector, useDispatch } from 'react-redux';


function App() {
	// const counter = useSelector((state) => state.counter)
	// const dispatch = useDispatch()

	// const increment = () => {
	// 	dispatch({type: "INCREMENT"})
	// }

	// const decrement = () => {
	// 	dispatch({type: "DECREMENT"})
	// }

	// const add = () => {
	// 	dispatch({type: "ADD", payload: 10})
	// }

  return (
    <div className={style.main}>
		<h1>React Form App</h1>
		{/* <h2>{counter}</h2>
		<button onClick={increment} >Increment</button>
		<button onClick={decrement}>Decrement</button>
		<Button onClick={add}>Add 10</Button> */}
		<FormFill />
    </div>
  );
}

export default App;
