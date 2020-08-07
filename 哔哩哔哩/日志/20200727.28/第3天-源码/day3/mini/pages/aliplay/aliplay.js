// pages/aliplay/aliplay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'currentTab': 0
  },

  // 滑块左右滑动会触发此事件
  swiperTab: function(e) {
    let _this = this;
    _this.setData({  // 如果要去修改 data 里面变量 currentTab，则需使用 setData() 函数
      currentTab: e.detail.current // 给变量currentTab进行重新赋值
    });
  },

  // 卡片点击事件
  clickTab: function(e) {
    // 当点中卡片需要去改变 currentTab 变量
    // currentTab 变量的值怎么来
    // e.target.dataset.current 相当于 <view data-current='0'></view>
    let _this = this;
    if(_this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
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