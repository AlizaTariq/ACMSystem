// import React, { useState, useEffect } from 'react';

// const FormComponent = () => {

//   // Define state
//   const [firstDropDownValue, setFirstDropDownValue] = useState('');
//   const [secondDropDownValue, setSecondDropDownValue] = useState('');
//   const [thirdDropDownValue, setThirdDropDownValue] = useState('');

//   // Fetch random numbers list
//   const fetchRandomNumbersList = async() => {
//     const response = await fetch('/fetchRandomNumbersList');
//     const data = await response.json();
//     setSecondDropDownValue(data);
//   };

//   // Fetch random fruits list
//   const fetchRandomFruitsList = async() => {
//     const response = await fetch('/fetchRandomFruitsList');
//     const data = await response.json();
//     setThirdDropDownValue(data);
//   };

//   // Fetch random vegetables list
//   const fetchRandomVegetablesList = async() => {
//     const response = await fetch('/fetchRandomVegetablesList');
//     const data = await response.json();
//     setThirdDropDownValue(data);
//   }

//   useEffect(() => {
//     if (firstDropDownValue === '10') {
//       fetchRandomNumbersList();
//     } else if (firstDropDownValue === '20') {
//       fetchRandomNumbersList();
//     } else if (firstDropDownValue === '30') {
//       fetchRandomNumbersList();
//     } else if (firstDropDownValue === '40') {
//       fetchRandomNumbersList();
//     } else if (firstDropDownValue === '50') {
//       fetchRandomNumbersList();
//     } else if (firstDropDownValue === '60') {
//       fetchRandomNumbersList();
//     }
//   }, [firstDropDownValue]);

//   useEffect(() => {
//     if (secondDropDownValue % 2 === 0) {
//       fetchRandomFruitsList();
//     } else {
//       fetchRandomVegetablesList();
//     }
//   }, [secondDropDownValue]);

//   return (
//     <form>
//       <select
//         value={firstDropDownValue}
//         onChange={e => setFirstDropDownValue(e.target.value)}
//       >
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="30">30</option>
//         <option value="40">40</option>
//         <option value="50">50</option>
//         <option value="60">60</option>
//       </select>

//       <select
//         value={secondDropDownValue}
//         onChange={e => setSecondDropDownValue(e.target.value)}
//       >
//         {secondDropDownValue && secondDropDownValue.map(number => (
//             <option key={number} value={number}>
//               {number}
//             </option>
//           ))}
//       </select>

//       <select
//         value={thirdDropDownValue}
//         onChange={e => setThirdDropDownValue(e.target.value)}
//       >
//         {thirdDropDownValue && thirdDropDownValue.map(item => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//       </select>
//     </form>
//   );
// };

// export default FormComponent;

// import React, { useState, useEffect } from 'react';

// function Form1() {
//   const [firstDropdownValue, setFirstDropdownValue] = useState('');
//   const [secondDropdownValue, setSecondDropdownValue] = useState([]);
//   const [thirdDropdownValue, setThirdDropdownValue] = useState([]);

//   useEffect(() => {
//     if (firstDropdownValue !== '') {
//       fetch('http://localhost:5000/getRandomNumbers?num=${firstDropdownValue}')
//         .then(res => res.json())
//         .then(data => {
//           if (data.length === 5 && data.every(num => num <= firstDropdownValue)) {
//             setSecondDropdownValue(data);
//           }
//         })
//     }
//   }, [firstDropdownValue]);

//   useEffect(() => {
//     if (secondDropdownValue.length > 0) {
//       let type = 'fruit';
//       if (secondDropdownValue.some(num => num % 2 === 1)) {
//         type = 'vegetable';
//       }
//       fetch('http://localhost:5000/getRandom${type}s/')
//         .then(res => res.json())
//         .then(data => {
//           if (data.length === 5) {
//             setThirdDropdownValue(data);
//           }
//         });
//     }
//   }, [secondDropdownValue]);

//   return (
//     <form>
//       <label>
//         First Dropdown:
//         <select value={firstDropdownValue} onChange={e => setFirstDropdownValue(e.target.value)}>
//           <option value="">Select...</option>
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="30">30</option>
//           <option value="40">40</option>
//           <option value="50">50</option>
//           <option value="60">60</option>
//         </select>
//       </label>
//       <label>
//         Second Dropdown:
//         <select value={secondDropdownValue} onChange={e => setSecondDropdownValue(e.target.value)}>
//           <option value="">Select...</option>
//           {secondDropdownValue.map(num => (
//             <option value={num}>{num}</option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Third Dropdown:
//         <select value={thirdDropdownValue} onChange={e => setThirdDropdownValue(e.target.value)}>
//           <option value="">Select...</option>
//           {thirdDropdownValue.map(name => (
//             <option value={name}>{name}</option>
//           ))}
//         </select>
//       </label>
//     </form>
//   );
// }

// export default Form1;

import React, { Component } from "react";
import axios from "axios";

class ReactForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDropDown: "",
      secondDropDown: [],
      thirdDropDown: [],
    };
  }

  //Handle first dropdown selection
  handleFirstDropDown = (event) => {
    this.setState({
      firstDropDown: event.target.value,
    });
    const selectedValue = event.target.value;
    //Fetch random numbers from backend
    axios.get("/fetchRandomNumbers/" + selectedValue).then((res) => {
      this.setState({
        secondDropDown: res.data,
      });
    });
  };

  //Handle second dropdown selection
  handleSecondDropDown = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue % 2 === 0) {
      //Fetch random fruits from backend
      axios.get("/fetchRandomFruits/").then((res) => {
        this.setState({
          thirdDropDown: res.data,
        });
      });
    } else {
      //Fetch random vegetables from backend
      axios.get("/fetchRandomVegetables/").then((res) => {
        this.setState({
          thirdDropDown: res.data,
        });
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label>First Dropdown</label>
          <select
            onChange={this.handleFirstDropDown}
            value={this.state.firstDropDown}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </select>
          <br />
          <label>Second Dropdown</label>
          <select onChange={this.handleSecondDropDown}>
            {this.state.secondDropDown.map((num, index) => {
              return (
                <option key={index} value={num}>
                  {num}
                </option>
              );
            })}
          </select>

          <br />
          <label>Third Dropdown</label>
          <select>
            {this.state.thirdDropDown.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </React.Fragment>
    );
  }
}

export default ReactForm1;

// import React, { useState } from 'react';

// const Form1 = () => {
//     const [valueOne, setValueOne] = useState("");
//     const [valueTwo, setValueTwo] = useState("");
//     const [valueThree, setValueThree] = useState("");

//     const handleChange = (e) => {
//         if(e.target.name === "valueOne") {
//             setValueOne(e.target.value);
//             fetch('/randomNumbers'+e.target.value)
//             .then(response => response.json())
//             .then(data => {
//                 setValueTwo(data.random_numbers);
//             })
//             .catch(error => console.log(error));
//         }
//         else if(e.target.name === "valueTwo") {
//             setValueTwo(e.target.value);
//             fetch('http://localhost:5000/randomFruitsOrVegetables?valueTwo='+e.target.value)
//             .then(response => response.json())
//             .then(data => {
//                 setValueThree(data.random_fruits_or_vegetables);
//             })
//             .catch(error => console.log(error));
//         }
//         else if(e.target.name === "valueThree") {
//             setValueThree(e.target.value);
//         }
//     }

//     return (
//         <form>
//             <div>
//                 <label>First Drop Down List: </label>
//                 <select name="valueOne" value={valueOne} onChange={handleChange}>
//                     <option value="">-- Select --</option>
//                     <option value="10">10</option>
//                     <option value="20">20</option>
//                     <option value="30">30</option>
//                     <option value="40">40</option>
//                     <option value="50">50</option>
//                     <option value="60">60</option>
//                 </select>
//             </div>
//             <div>
//                 <label>Second Drop Down List: </label>
//                 <select name="valueTwo" value={valueTwo} onChange={handleChange}>
//                     <option value="">-- Select --</option>
//                     {valueTwo && valueTwo.map(val => <option key={val} value={val}>{val}</option>)}
//                 </select>
//             </div>
//             <div>
//                 <label>Third Drop Down List: </label>
//                 <select name="valueThree" value={valueThree} onChange={handleChange}>
//                     <option value="">-- Select --</option>
//                     {valueThree && valueThree.map(val => <option key={val} value={val}>{val}</option>)}
//                 </select>
//             </div>
//         </form>
//     )
// }

// export default Form1;

// import React, { useState } from "react";

// const Form1 = () => {
//   const [selected, setSelected] = useState(null);
//   const [numbers, setNumbers] = useState([]);

//   const handleChange = (event) => {
//     setSelected(event.target.value);
//     fetch("/api/" + event.target.value).then((response) => {
//       response.json().then((data) => {
//         setNumbers(data);
//       });
//     });
//   };

//   return (
//     <div>
//       <label>Select a Number</label>
//       <select value={selected} onChange={handleChange}>
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="30">30</option>
//         <option value="40">40</option>
//         <option value="50">50</option>
//         <option value="60">60</option>
//       </select>
//       <label>Generated Numbers List</label>
//       <select>
//         {console.log(numbers)}
//         {numbers.map((number) => (
//           <option value={number}> {number}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Form1;
