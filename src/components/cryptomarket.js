import React, { useRef, useEffect } from 'react';


export default function CryptoMarket() {
    const _ref = useRef(null)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
            "width": "100%",
            "height": "100%",
            "symbolsGroups": [
                {
                "name": "",
                "originalName": "Crypto",
                "symbols": [
                        {
                            "name": "BINANCE:BTCUSDT",
                            "displayName": "Bitcoin"
                        },
                        {
                            "name": "BINANCE:ETHUSDT",
                            "displayName": "Ethereum"
                        },
                        {
                            "name": "BINANCE:BNBUSDT",
                            "displayName": "Binance Coin"
                        },
                    ]
                },
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "locale": "en",
            "largeChartUrl": process.env.REACT_APP_APPLICATION_HOST,
            }

        );
        _ref.current.replaceChild(script, _ref.current.lastChild);
    }, [])

    return(
        <>
        <div className="tradingview-widget-container" ref={_ref}>
            <div className="tradingview-widget-container__widget"></div>           
        </div>
        </>
    );
} 

