import addCash from "../common/pngkey.com-cash-png-114087.png";

const Rebalance: React.FC = () => {
  return (
    <>
      <h2>Rebalance Strategy</h2>
      <p>
        <img src={addCash} width="30px" alt="" />
        Additional cash to invest: $
        <input type="number" id="add-cash" defaultValue="0" step="100" />
      </p>
      <button>Calculate</button>
      <div id="result"></div>
    </>
  );
};

export default Rebalance;
