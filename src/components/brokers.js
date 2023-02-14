const Brokers = () => {
return (
    <>
        <h4>Broker Whitelable Program</h4>
        <br></br>
        You can use our trading engine, and create a trading platform with our APIs. All you need is to setup a client side.
        <br></br>
        If you are a running exchange you are welcome to use our liquidity marketplace.

        All exchanges need liquidity. By our negative commission for maker orders
                (<a href='/market-makers'>see marker making program</a>)

        You can trade your liquidity.

        This means you can proxy your orders to our order book and get paid if someone uses your liquidity.

        <br></br>
        For more info send an email to {process.env.REACT_APP_INFO_EMAIL}
    </>
);
};
export default Brokers;
