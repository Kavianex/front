const Marketmakers = () => {
return (
    <>
        <h4>Market Maker Program</h4>
        <br></br>
        Market Makers are traders that provide liquidity to the exchange.

        They send limit orders to the exchange to add liquidity.

        Market makers should hedge their positions by taking opposite positions on another exchange to cover price change risks.

        Due to commission fees this operation is not efficient.

        Here we offer you negative commission to compensate for your trading risks.

        With this rebate policy, not only do market makers not pay fees, but you also get a rebate that covers trading fees on other exchanges.

        So you can easily cover your risk and take advantage of this arbitrage opportunity.        
        <br></br>
        For more info send an email to {process.env.REACT_APP_INFO_EMAIL}
    </>
);
};
export default Marketmakers;
