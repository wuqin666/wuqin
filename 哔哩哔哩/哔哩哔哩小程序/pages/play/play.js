// pages/play/play.js
Page({
    res:[],
  /**
   * 页面的初始数据
   */
  data: {
    'currentTab': 0,
     newslist:[],
     videoid:'',
     videourl:'',
     videoimg:'',
     videoauthor:'',
     videofans:'',
     videotitle:'',
     videogoodnum:'',
     videodate:'',
     videoplaynum:'',
  },

    //滑块左右滑动会触发此事件
    swiperTab: function (e) {
      let _this = this;
      _this.setData({
        currentTab: e.detail.current
      })
    },
  

    //卡片点击事件
    clickTab: function (e) {
      let _this = this;
      // console.log(e);
      if (_this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        _this.setData({
          currentTab: e.target.dataset.current
        })
        // console.log(e)
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this;
    wx.request({
      url: 'http://172.16.12.11:8080/app/console/homevideo',
      method:'GET',
      dataType:'json',
      
      success : (e) => {
        // console.log(e);
        let list = e.data.newslist;
        _this.setData({
          res:list,
        })
        console.log(list)
      },
    
    })






    let id = options.videoid
    let url = options.videourl
    let img = options.videoimg
    let author = options.videoauthor
    let fans = options.videofans
    let title = options.videotitle
    let playnum = options.videoplaynum
    let goodnum = options.videogoodnum
    let date = options.videodate
    console.log(options)
    this.setData({
      videoid : id,
      videourl : url,
      videoimg:img,
      videoauthor:author,
      videofans:fans,
      videotitle:title,
      videoplaynum:playnum,
      videogoodnum:goodnum,
      videodate:date,
    })


    var _this = this;
    wx.request({
      url: 'http://172.16.12.11:8080/app/console/homevideo',
      method:'GET',
      dataType:'json',
      
      success : (e) => {
        let list = e.data.newslist;
        // console.log(list)
        _this.setData({
          newslist:list
        })
      },
    })
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