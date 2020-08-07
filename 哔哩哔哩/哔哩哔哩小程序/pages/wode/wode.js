// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  // tap_ch: function(e) {
  //   // 点击控制样式的变化
  //   // this 当前页面的对象，包含：js里面函数，变量名，内置方法 setData()
  //   let _this = this;
  //   if(_this.data.open) {
  //     _this.setData({
  //       open: false // 关闭状态
  //     });
  //   } else {
  //     _this.setData({
  //       open: true // 打开状态
  //     });
  //   }
  // },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  clicklsjl:function(e){
    let history = e.detail.value;
    wx.navigateTo({
      url: '/pages/history/history?history=' + history,
    });
  },
  clicktx:function(e){
    let info = e.detail.value;
    wx.navigateTo({
      url: '/pages/userinfo/userinfo?info=' + info,
    });
  },
  clicklogin:function(e){
    let log = e.detail.value;
    wx.navigateTo({
      url: '/pages/psdlogin/psdlogin?log=' + log,
    });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})