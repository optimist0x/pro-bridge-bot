module.exports = {
    // Основные сети
    networks: {
        ethereum: {
            rpc: 'https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY',
            chainId: 1,
            name: 'Ethereum Mainnet'
        },
        polygon: {
            rpc: 'https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY',
            chainId: 137,
            name: 'Polygon'
        },
        bsc: {
            rpc: 'https://bsc-dataseed.binance.org/',
            chainId: 56,
            name: 'BSC'
        }
    },
    
    // Популярные токены
    tokens: {
        ETH: '0x0000000000000000000000000000000000000000',
        USDC: '0xA0b86a33E6441b8C4C8C0E1234567890abcdef12',
        USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    
    // DEX роутеры
    dexes: {
        uniswap: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        sushiswap: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
        pancakeswap: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
    }
};
// Новая функция добавлена 2025-10-01
function newFeature() {
    console.log('Новая функция работает!');
    return true;
}