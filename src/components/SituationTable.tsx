import Portfolio from "./Portfolio";

const SituationTable: React.FC = () => {
  return (
    <table className="center">
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Current Price</th>
          <th>Quantity</th>
          <th>Market Value</th>
          <th>Ratio</th>
        </tr>
      </thead>
      <tbody>
        <Portfolio />
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={4}>Initial Investment Year</th>
          <td>
            <input id="initial-year" type="number" defaultValue="2021" />
          </td>
        </tr>
        <tr>
          <th colSpan={4}>Initial Investment Amount</th>
          <td>
            $<input id="initial-investment" type="number" defaultValue="180000" />
          </td>
        </tr>
        <tr>
          <th colSpan={4}>Current gain/loss</th>
          <td>
            <span id="current-profit"></span>
          </td>
        </tr>
        <tr>
          <th colSpan={4}>
            CAGR{" "}
            <a href="https://www.investopedia.com/terms/c/cagr.asp" target="_blank">
              &#x1F517;
            </a>
          </th>
          <td id="CAGR"></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default SituationTable;
