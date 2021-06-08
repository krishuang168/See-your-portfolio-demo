import React from "react";
import SingleAsset from "./SingleAsset";
import LineTotal from "./LineTotal";
import { financial } from "../common/utility";

import portfolioData from "../common/data/portfolioData";

const assetNameArray = Object.keys(portfolioData);

let currentTotal = financial(
  assetNameArray.reduce((sum, asset) => {
    return sum + portfolioData[asset].price * portfolioData[asset].quantity;
  }, 0)
);

interface PortfolioProps {}

interface PortfolioState {
  total: number;
}

class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);
    this.state = { total: currentTotal };

    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal(amount: number) {
    amount = financial(amount);

    currentTotal = financial(
      assetNameArray.reduce((sum, asset) => {
        return sum + portfolioData[asset].price * portfolioData[asset].quantity;
      }, 0)
    );

    // this.setState({ total: financial(this.state.total + amount) });
    this.setState({ total: currentTotal });
  }

  render() {
    const portfolio = assetNameArray.map((asset) => {
      return (
        <SingleAsset
          key={asset}
          assetType={portfolioData[asset].assetType}
          note={portfolioData[asset].note}
          ticker={portfolioData[asset].ticker}
          price={portfolioData[asset].price}
          quantity={portfolioData[asset].quantity}
          currentTotal={currentTotal}
          getChildState={this.updateTotal}
        />
      );
    });

    return (
      <>
        {portfolio}
        <LineTotal total={this.state.total} />
      </>
    );
  }
}

export default Portfolio;
