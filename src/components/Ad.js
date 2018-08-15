import React, { Component } from "react";
import { DFPSlotsProvider, AdSlot } from "react-dfp";
class Ad extends Component {
  render() {
    return (
      <DFPSlotsProvider
        dfpNetworkId="4750775421260645"
        sizeMapping={[{ viewport: [0, 0], sizes: [[300, 250]] }]}
      >
        <div className="desktop-ads">
          <AdSlot sizes={[[300, 250]]} />
        </div>
      </DFPSlotsProvider>
    );
  }
}

export default Ad;
