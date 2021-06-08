import React from "react";
import { financial } from "../common/utility";

interface SingleAssetProps {
  assetType: string;
  ticker: string;
  note: string;
  price: number;
  quantity: number;
  currentTotal: number;
  getChildState: (marketValue: number) => void;
}

interface SingleAssetState {
  assetType: string;
  ticker: string;
  price: number;
  quantity: number;
}

class SingleAsset extends React.Component<SingleAssetProps, SingleAssetState> {
  constructor(props: SingleAssetProps) {
    super(props);
    this.state = {
      assetType: this.props.assetType,
      ticker: this.props.ticker,
      price: this.props.price,
      quantity: this.props.quantity,
    };
  }

  /* Event handlers */
  assetTypeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ assetType: ev.target.value });
  };
  // --------------
  tickerChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ticker: ev.target.value });
  };
  // --------------
  priceChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const oldMarketValue = this.state.price * this.state.quantity;
    const newMarketValue = Number(ev.target.value) * this.state.quantity;

    this.props.getChildState(newMarketValue - oldMarketValue);

    this.setState({
      price: Number(ev.target.value),
    });
  };

  quantityChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const oldMarketValue = this.state.price * this.state.quantity;
    const newMarketValue = this.state.price * Number(ev.target.value);

    this.props.getChildState(newMarketValue - oldMarketValue);

    this.setState({
      quantity: Number(ev.target.value),
    });
  };

  /* Rendering */
  render() {
    const baseUrl = "https://www.marketwatch.com/investing/fund/";
    const marketValue = financial(this.state.price * this.state.quantity);

    // Special Background Colors
    let bgcolor;
    if (this.props.assetType.includes("Short Put")) {
      bgcolor = "#efe";
    }
    if (this.props.assetType === "Cash") {
      bgcolor = "#ff0";
    }

    return (
      <tr style={{ backgroundColor: bgcolor }}>
        <td>
          <strong>{this.props.assetType}</strong>
          <br />({this.props.note})
        </td>
        <td>
          <input defaultValue={this.state.ticker} onChange={this.tickerChange} size={7} />
          <a id="equity-link" target="_blank" rel="noreferrer" href={baseUrl + this.state.ticker}>
            {" "}
            🔗
          </a>
        </td>
        <td>
          $
          <input
            type="number"
            step="0.01"
            defaultValue={this.state.price}
            onChange={this.priceChange}
          />{" "}
          🔄
        </td>
        <td>
          <input type="number" defaultValue={this.state.quantity} onChange={this.quantityChange} />
        </td>
        <td>${marketValue}</td>
        <td>{financial((marketValue / this.props.currentTotal) * 100) + "%"}</td>
      </tr>
    );
  }
}

export default SingleAsset;
