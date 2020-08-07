// pages/zhuye/zhuye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'currentTab': 0,
    mode:"scaleToFill",
    arr:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    videolist:[],

  },
  swiperTab: function(e) {
    let _this = this;
    _this.setData({  
      currentTab: e.detail.current 
    });
  },
  clickTab: function(e) {
    let _this = this;
    if(_this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      });
    }
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.data.arr;
    for (let i = 1; i < 4; i++) {
      array.push("/pages/image/" + i + ".jpg")
    }
    this.setData({ arr: array});
    var _this=this;
    wx.request({
    url: 'http://172.16.12.11:8080/app/console/homevideo',
    method:'GET',
    dataType:"json",
    success: function(e) {
      //  console.log(e)
      let videolist=e.data.newslist;
      _this.setData({
        videolist:e.data.newslist,
      });
       console.log(videolist)
    },
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