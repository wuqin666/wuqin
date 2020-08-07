// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resp:[],
    text:'',
    username:[],
    password:[],
    res:[]
    
    
  },
  expInput: function (e) {
    this.setData({ 
      text: e.detail.value,
      })
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://172.16.12.11:8080/app/console/loginuser',
      method: 'POST',
      dataType: 'json', // 小写的json
      success: function (e) {
       let res = e.data.newslist
        _this.setData({
          // resp:e.data.newslist
        });
        console.log(e.data.newslist); 
        console.log(res)
      }
    })




    // for (var i = 0; i < res.length; i++) {
    //   if (res == text) {
    //     console.log('true')
    //   }
    // }

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