const OffsetTable: React.FC = () => {
  return (
    <table id="offset-table" className="center">
      <thead>
        <tr>
          <th>Ratio</th>
          <th>Equity</th>
          <th>Bond</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Preset Ratio</th>
          <td>
            <input
              id="equity-percentage"
              type="number"
              defaultValue="60"
              step="10"
              max="100"
              min="0"
            />
            %
          </td>
          <td>
            <span id="bond-percentage"></span>%
          </td>
        </tr>
        <tr>
          <th>Accepted Offset</th>
          <td colSpan={2}>
            <input type="number" id="accepted-offset" defaultValue="10" />%
          </td>
        </tr>
        <tr>
          <th>Current Ratio</th>
          <td>
            <span id="cur-equity-ratio"></span>
          </td>
          <td>
            <span id="cur-bond-ratio"></span>
          </td>
        </tr>
        <tr>
          <th>Current Offset of Equity</th>
          <td colSpan={2}>
            <span id="current-offset"></span>%
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OffsetTable;
