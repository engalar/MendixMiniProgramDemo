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
 * @returns {Promise.<void>}
 */
export async function WX_JS_Share(appId, nonce, timestamp, sig) {
	// BEGIN USER CODE

  // wx.miniProgram.navigateBack({ delta: 1 })

  // wx.miniProgram.postMessage({
  //   data: {
  //     url: window.location.href,
  //     message: 'hello from mendix',
  //     title: 'A mendix app share',
  //   },
  // })
  wx.miniProgram.navigateTo({url: `../share/share?url=https://${window.location.host}/link/share?page=sample`})
	// END USER CODE
}
