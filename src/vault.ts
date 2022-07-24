/**
   * Prints some statistics of the current vault.
   
  printVaultInfo() {
    const vault = this._loanVault;
    logInfo('----------------- VAULT CONFIG  -----------------');
    logInfo('');
    logInfo(`Vault ID: ${vault.vaultId}`);
    logInfo(`Vault State: ${vault.state}`);
    logInfo(`Vault Scheme: ${vault.loanScheme.minColRatio}%`);
    logInfo(`Loan interest: ${vault.loanScheme.interestRate}%`);
    logInfo('');
    logInfo('----------------- VAULT STATUS  -----------------');
    logInfo('');
    if (Vault.isVaultActive(vault)) {
      logInfo(`Collateral: ${vault.collateralValue}`);
      logInfo(`Loan: ${vault.loanValue}`);
      logInfo(`Ratio: ${vault.collateralRatio}`);
      logfo('-------------- VAULT COLLATERALS  ---------------');
      vault.collateralAmounts.map((entry) => {
        logInfo(`${entry.displaySymbol}: ${entry.amount}`);
      });
      logInfo('-------------- VAULT LOANS  ---------------');
      vault.loanAmounts.map((entry) => {
        logInfo(`${entry.displaySymbol}: ${entry.amount}`);
      });
      logInfo('-------------- VAULT INTEREST  ---------------');
      vault.interestAmounts.map((entry) => {
        logInfo(`${entry.displaySymbol}: ${entry.amount}`);
      });
    }
  }

  // prints out some config settings (e.g. to display when the bot starts)
const printLogConfig = () => {
  logInfo('The bot will use the following configuration:');
  logInfo('---------------------------------------------');
  logInfo(`Name:                    ${getBotName()}`);
  logInfo(`Version:                 ${getBotVersion()}`);
  logInfo(`DFI Blockchain to use:   ${getDFIChainConfig().network}`);
  logInfo(`Telegram enabled:        ${!!getTelegram()}`);
  logInfo('---------------------------------------------');
};
*/
