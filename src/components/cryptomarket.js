// function loadScript(src) {
//     var tag = document.createElement(`script`, {
//         "width": "100%",
//         "height": "100%",
//         "symbolsGroups": [
//             {
//             "name": "",
//             "originalName": "Crypto",
//             "symbols": [
//                     {
//                         "name": "BINANCE:BTCUSDT",
//                         "displayName": "Bitcoin"
//                     },
//                     {
//                         "name": "BINANCE:ETHUSDT",
//                         "displayName": "Ethereum"
//                     },
//                 ]
//             },
//         ],
//         "showSymbolLogo": true,
//         "colorTheme": "light",
//         "isTransparent": false,
//         "locale": "en"
//     });
//     tag.async = true;
//     tag.type = 'text/javascript';
//     tag.src = src;
//     document.getElementsByTagName('div')[0].appendChild(tag);
// }

// function CryptoMarket(){
//     return (
//         <>
//             <div className="tradingview-widget-container">
//             <div className="tradingview-widget-container__widget"></div>
//             {loadScript('https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js')}
//             </div>
//         </>
//     )
// }
// export default CryptoMarket;





import React from 'react';


export default  class CryptoMarket extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    // componentDidMount() {
    componentDidMount() {
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
                    ]
                },
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "locale": "en"
            }

        );
        this._ref.current.appendChild(script);
        console.log("asd");
    }
    render() {
        return(
        <div className="tradingview-widget-container" ref={this._ref}>
            <div className="tradingview-widget-container__widget"></div>           
        </div>
        );
    }
   
}