// pages/cehua/cehua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    currentTab: 1,
  },
  swiperTab: function (e) {
    // console.log(e);
    let _this = this;
    _this.setData({
      currentTab: e.detail.current
    })
  },

  tap_ch: function (e) {
    // 点击控制样式的变化
    // this 当前页面的对象，包含：js里面函数，变量名，内置方法 setData()
    let _this = this;
    if (_this.data.open) {
      _this.setData({
        open: false, // 关闭状态
        currentTab: e.detail.current = 1
      });
    } else {
      _this.setData({
        open: true,// 打开状态
        currentTab: e.detail.current = 0
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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