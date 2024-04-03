// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import wx from 'weixin-js-sdk'

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} timeStamp
 * @param {string} nonceStr
 * @param {string} prepayId
 * @param {string} paySign
 * @param {string} out_trade_no
 * @returns {Promise.<void>}
 */
export async function WX_JS_PayWx(timeStamp, nonceStr, prepayId, paySign, out_trade_no) {
	// BEGIN USER CODE
  wx.miniProgram.getEnv(function (res) {
    console.log(res.miniprogram) // true
  })

  const payDataStr = encodeURIComponent(JSON.stringify({
    timeStamp, nonceStr, prepayId, paySign,out_trade_no
  }));
  const url = `../wxPay/wxPay?payDataStr=${payDataStr}`;
    wx.miniProgram.navigateTo({
      url: url
    }); 


	// END USER CODE
}