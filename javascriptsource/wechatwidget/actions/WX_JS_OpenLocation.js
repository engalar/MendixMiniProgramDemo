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
 * @param {string} appId
 * @param {string} nonce
 * @param {string} timestamp
 * @param {string} sig
 * @param {string} latitude
 * @param {string} longtitude
 * @returns {Promise.<void>}
 */
export async function WX_JS_OpenLocation(appId, nonce, timestamp, sig, latitude, longtitude) {
	// BEGIN USER CODE
  wx.miniProgram.getEnv(function (res) {
    console.log(res.miniprogram) // true
  })

   wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr: nonce,
      signature: sig,
      jsApiList: ['openLocation', 'getLocation'],
    })

    wx.ready(() => {
       wx.openLocation({
            latitude: Number(latitude),
            longitude: Number(longtitude),
            scale: 18,
            name: 'Mendix',
          })
    })

    wx.error(function (res) {
      console.log(res)
    })

	// END USER CODE
}
