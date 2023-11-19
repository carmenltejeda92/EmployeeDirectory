/*  Author: C. Tejeda
    Date: 11.19.2023
    Purpose: Create an employee directory list using React 
             No functionality needed, just the setup */


import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div><h1 id='leftHeader'>Employee Directory</h1></div>
        <div><input id='search' type="text" placeholder='Search..'></input></div>
        <div className='empList'>
          <div id='one'>
            <img className ='empImg' src='https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1660858625934-ZVWEMZYZHLWTVCXC19E3/Brandon+Andre+-+Headshot+Los+Angeles+na4-3.jpg?format=1000w' height='65px' width='55px'/>
            <h4>Julie Taylor</h4>
            <h6>President and CEO</h6>
          </div>
          <div id='two'>
            <img className = 'empImg' src= 'https://images.squarespace-cdn.com/content/v1/5a5f81d812abd9f0929541c8/1517777313099-EA1WR174E4GWVO7O5IFL/DSC_8257-reduced.jpg?format=1000w' width='55px' height='65px'/>
            <h4>James King</h4>
            <h6>VP of Marketing</h6>
          </div>
          <div id='three'>
            <img className = 'empImg' src='https://images.squarespace-cdn.com/content/v1/5a5f81d812abd9f0929541c8/1516828827041-RN6V3A2LZ4N5EOM1T48T/DSC_3495-a.jpg?format=750w' height='65px' width='55px'/>
            <h4>Eugene Lee</h4>
            <h6>CFO</h6>
          </div>
          <div id='four'>
            <img className = 'empImg' src='https://images.squarespace-cdn.com/content/v1/5a5f81d812abd9f0929541c8/1516828827584-Z1MJ29V1I03IZ9U4QEZ6/DSC_4204-crop.jpg?format=750w' height='65px' width='55px'/>
            <h4>Laura Lee</h4>
            <h6>VP of Engineering</h6>
          </div>
          <div id='five'>
            <img className = 'empImg' src='https://images.squarespace-cdn.com/content/v1/5a5f81d812abd9f0929541c8/1517947240489-GNSKS6MM72M5971IBFY8/DSC_2425-fb.jpg?format=750w' height='65px' width='55px'/>
            <h4>Ray Moore</h4>
            <h6>VP of Sales</h6>
          </div>
          <div id='six'>
            <img className = 'empImg' src='https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/5a6bf40b-1dbe-4db1-9901-e071a1f5407e/430.jpg?format=1000w' height='65px' width='55px'/>
            <h4>Lucy Lou</h4>
            <h6>QA Manager</h6>
          </div>
        </div>
      </div>
      <div className='empPage'>
        <div><h1 id='rightHeader'>Employee</h1></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
