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
 * @returns {Promise.<string>}
 */
export async function WX_JS_Record(appId, nonce, timestamp, sig) {
	// BEGIN USER CODE

  wx.miniProgram.getEnv((res) => {
    console.log(res.miniprogram) // true
  })

  return new Promise((resolve, reject) => {
    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr: nonce,
      signature: sig,
      jsApiList: [
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'translateVoice',
      ],
    })

    wx.ready(() => {
      wx.startRecord()
    })

    wx.error((res) => {
      console.log(res)
    })
  })

	// END USER CODE
}