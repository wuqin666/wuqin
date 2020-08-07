// pages/xiala/xiala.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:['户型','风格','面积'],
    // yc:true,
    // y1: true,
    // y2: true,
    yc:[true,true,true]
  },


  show:function(e){
    // console.log(data.res);
    let _this = this;
    if(_this.data.yc == true ){
        _this.setData({
          yc:false
        })
    } else {
      _this.setData({
        yc: true
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