import React, { useState, useEffect } from "react";

//   function App () {
//   const [coffe, setCoffe] = useState(0);
//   const [sugar, setSugar] = useState(0);

// const addCoffe = () => setCoffe(coffe + 1);
// const addSugar = () => setSugar(sugar + 1);

// const save = () => {
//   localStorage.setItem('coffe', coffe);
//   localStorage.setItem('sugar', sugar);
// }

// const clear = () => {
//     localStorage.removeItem('coffe');
//     localStorage.removeItem('sugar');
//     setCoffe(0);
//     setSugar(0);
// }

// useEffect(()=>{
//   if (localStorage.getItem('coffe')){
//     setCoffe(+localStorage.getItem('coffe'));
//     setSugar(+localStorage.getItem('sugar'));
//   }
// }, []);

// return (
//   <div className="wrapper">
//     <div className="list">
//       <h1>Product list</h1>
//       <div className='product'>
//       <span>{`Coffe: ${coffe}`}</span>
//       <button onClick={addCoffe}>Add</button>
//       </div>
//       <div className='product'>
//       <span>{`Sugar: ${sugar}`}</span>
//         <button onClick={addSugar}>Add</button>
//       </div>
//       <div className='save'>
//           <button onClick={save}>SAVE</button>
//           <button onClick={clear}>CLEAR</button>
//         </div>
//     </div>
//   </div>
//   );
// }

function App() {
  const [products, setProducts] = useState({
    coffee: 0,
    sugar: 0,
  });

  const [showBtnCoffee, setShowBtnCoffee] = useState(true);
  const [showBtnSugar, setShowBtnSugar] = useState(true);
  // const [tooMuch, setTooMuch] = useState(false);
  // const addSugar = () => tooMuch ? false : setSugar(sugar + 1);
   // максимум додати цукор

  const addСoffee = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        
        coffee: prevState.coffee + 1,
      };
    });

  const addSugar = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        sugar: prevState.sugar + 1,
      };
    });

  const removeСoffee = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        coffee: prevState.coffee - 1,
      };
    });

  const removeSugar = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        sugar: prevState.sugar - 1,
      };
    });

  const save = () => {
    localStorage.setItem("coffee", products.coffee);
    localStorage.setItem("sugar", products.sugar);
  };

  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
    setProducts({
      coffee: 0,
      sugar: 0
    });
  };

  useEffect(() => {
    if (localStorage.getItem("coffee")) {
      setProducts((prevState) => ({
        ...prevState,
        coffee: +localStorage.getItem("coffee"),
        sugar: +localStorage.getItem("sugar"),
      }));
    }
  }, []);

  // useEffect(() => {
  //   setTooMuch(sugar >= 5)
  // }, [sugar]);

  // максимум додати цукор

  useEffect(() => {
    setShowBtnCoffee(products.coffee > 0);
    setShowBtnSugar(products.sugar > 0);
  }, [products]);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`coffee: ${products.coffee}`}</span>
          <button onClick={addСoffee}>Add</button>
          {showBtnCoffee && (
            <button onClick={removeСoffee} disabled={products.coffee === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {showBtnSugar && (
            <button onClick={removeSugar} disabled={products.sugar === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
