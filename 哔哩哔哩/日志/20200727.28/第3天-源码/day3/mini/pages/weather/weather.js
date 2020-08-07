// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherlist: [] // 给wxml传递数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(_this.data.weatherlist);
    wx.request({
      url: 'http://api.tianapi.com/txapi/tianqi/index?key=ed1394ce936a5526c70fea58875538e0&city=成都',
      method: 'GET',
      dataType: 'json', // 小写的json
      success: function(e) {
        // e.newslist 返回存储天气信息数据
        // let newslist 自己定义的变量, 接收 e.newslist 里面数据
        let newslist = e.data.newslist;
        _this.setData({
          weatherlist: newslist
        });
      }
    })
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