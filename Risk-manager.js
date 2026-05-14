/**
 * Project: Professional Trading Risk Manager
 * Author: Juan Esteban Vinasco Jaramillo
 * Goal: Automate position sizing and risk validation for traders.
 */

// 1. Position Size Calculator Function
function calculatePositionSize(balance, riskPercentage, stopLossPips) {
    // Logic: How much money are we risking in USD?
    const amountToRisk = balance * (riskPercentage / 100);
    
    // Formula for position size based on SL
    const positionSize = amountToRisk / stopLossPips;
    
    return {
        cashRisked: amountToRisk.toFixed(2),
        size: positionSize.toFixed(4)
    };
}

// 2. Risk Validator (Safety Logic)
function validateTrade(riskPercent) {
    console.log("--- System Check ---");
    if (riskPercent > 3) {
        console.log("⚠️ CRITICAL ALERT: Risk is too high! Stick to your trading plan.");
        return false;
    } else {
        console.log("✅ Risk verified. Safe to proceed.");
        return true;
    }
}

// 3. Execution Example
const myAccountBalance = 2000; // Example account
const desiredRisk = 1.5;      // Risking 1.5%
const slDistance = 50;        // Stop Loss distance in pips

if (validateTrade(desiredRisk)) {
    const tradeResult = calculatePositionSize(myAccountBalance, desiredRisk, slDistance);
    console.log(`Analyzing Pair with Balance: $${myAccountBalance}`);
    console.log(`Recommended Lot Size: ${tradeResult.size}`);
    console.log(`Maximum USD Loss: $${tradeResult.cashRisked}`);
}
