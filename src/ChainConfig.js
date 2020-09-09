var config = {
  core_asset: "NBS",
  address_prefix: "NBS",
  //  交易过期时间
  expire_in_secs: 15,
  //  提案过期时间
  expire_in_secs_proposal: 24 * 60 * 60,
  //  理事会提案审核周期
  review_in_secs_committee: 24 * 60 * 60,
  //  各种链参数设置，根据chain id自动初始化
  networks: {
    //  new bitshares mainnet
    NewBitShares: {
      core_asset: "NBS",
      address_prefix: "NBS",
      chain_id:
        "cd931cb96d657ff0ef0226f7ae9d25175b3cc96a84490a674ed36170830324e7"
    },
    //  new bitshares testnet
    Test: {
      core_asset: "NBS",
      address_prefix: "NBS",
      chain_id:
        "905413ea3fd7842629fc7a38e81b32603e2a42bca795a95524c95475a7e31404"
    },
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "NBS";
    config.address_prefix = "NBS";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "NBS") => (config.address_prefix = prefix)
};

export default config;
