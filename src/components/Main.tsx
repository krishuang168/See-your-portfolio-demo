import Resource from "./Resource";
import SituationTable from "./SituationTable";

const Main: React.FC = () => {
  return (
    <div className="center">
      <h1>Rebalancing The Investment Portfolio</h1>
      <h2>Your Situation</h2>

      <SituationTable />

      <p>
        <em>Note: Please update the prices yourself.</em>
      </p>

      <Resource />
    </div>
  );
};

export default Main;
