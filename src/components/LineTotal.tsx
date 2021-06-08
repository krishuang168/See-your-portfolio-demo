interface LineTotalProps {
  total: number;
}

function LineTotal({ total }: LineTotalProps) {
  return (
    <tr>
      <th>
        <button id="add-asset">Add an asset</button>
      </th>
      <th colSpan={3}>Total</th>
      <td>{total}</td>
      <td>100%</td>
    </tr>
  );
}

export default LineTotal;
