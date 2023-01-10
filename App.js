import "./App.css";
import market from "./1.jpg";
import bid from "./2.png";
import smart from "./3.png";
function App() {
  return (
    <div className="App">
        <div className="navbar">
          <button> Lendify</button>
          <div class="menu">
            <button>Home</button>
            <button>How we work</button>
            <button>Contacts</button>
            <button>Dashboard</button>
          </div>
        </div>
      <hr></hr>
      <div className="text">
        <h2>
          PEER-TO-PEER <span>BORROWING</span> MADE EASY
        </h2>
      </div>
      <div className="row1">
        <div className="column1">
          <div className="card1">
            <p>
              are you tired of low returns on your investments? Lendify allows
              you to earn higher returns by directly investing in small
              businesses and individuals
            </p>
            <button id="bt1"> readmore</button>
          </div>
        </div>
        <div className="column1">
          <div className="card1">
            <p>
              are you in need of affordable financing options? Lendify connects
              you with lenders who are willing to invest in your goals
            </p>
            <button id="bt1">readmore</button>
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="row">
          <div className="column">
            <div className="card" style = {{"background-color":"#4F4FD8"}}>
              <img src={market} alt = ""></img>
              <h3 style = {{"background-color":"#4F4FD8"}}>marketplace</h3>
              <p style = {{"background-color":"#4F4FD8"}}>
                we provide a user-friendly online marketplace where borrowers
                and lenders can connect and interact with each other directly
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card" style = {{"background-color":"#4F4FD8"}}>
              <img src={bid} alt=""></img>
              <h3 style = {{"background-color":"#4F4FD8"}}>loan bidding</h3>
              <p style = {{"background-color":"#4F4FD8"}}>
                borrowers list their loan requirements on the platform,
                including the amount , interest rate and repayment
                period.Lendify then borrow those listings and place bids on the
                loans that meet theirinvestment quota
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card" style = {{"background-color":"#4F4FD8"}}>
              <img src={smart} alt=""></img>
              <h3 style = {{"background-color":"#4F4FD8"}}>smart controls</h3>
              <p style = {{"background-color":"#4F4FD8"}}>
                Lendify uses smart controls to automate the loan disbursal and
                repayment process. This ensures that the terms of the loan are
                enforceable and reduces the risk of default.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
