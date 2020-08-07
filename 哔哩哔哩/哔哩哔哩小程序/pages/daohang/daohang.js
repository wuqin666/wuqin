// pages/daohang/daohang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickTab:function(e){
    let daohanginfo=e.detail.value;
    wx.navigateTo({
      url: '/pages/daohangtz/daohangtz?daohanginfo'+doahanginfo,
    });
  },

  bofang:function(e){
    let videoid = e.currentTarget.dataset.id
    let videourl = e.currentTarget.dataset.url
    let videoimg = e.currentTarget.dataset.img
    let videoauthor = e.currentTarget.dataset.author
    let videofans = e.currentTarget.dataset.fans
    let videotitle = e.currentTarget.dataset.title
    let videoplaynum = e.currentTarget.dataset.playnum
    let videogoodnum = e.currentTarget.dataset.goodnum
    let videodate = e.currentTarget.dataset.date


    wx.navigateTo({
       url: '/pages/play/play?videoid='+videoid +'&videourl='+videourl+'&videoimg='+videoimg+'&videoauthor='+videoauthor+'&videofans='+videofans+'&videotitle='+videotitle+'&videogoodnum='+videogoodnum+'&videodate='+videodate+'&videoplaynum='+videoplaynum,
      
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