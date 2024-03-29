import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}





// const products =[
//   {name: 'Laptop', price: 47000},
//   {name: 'Phone', price: 75000},
//   {name: 'Watch', price: 3500},
//   {name: 'tablet', price: 35000},
// ]
// {
  // products.map(product => <Product name={product.name} price={product.price}></Product>)
  // }
  // {/* <Product name="Laptop" price="47000"></Product>
  // <Product name="Phone" price="75000"></Product>
  // <Product name="watch" price="3500"></Product> */
// }

// function Product(props){
//   return(
//     <div className="product">
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }
export default App;
