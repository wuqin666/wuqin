Page({

  /**
   * 页面的初始数据
   */
  data: {
    'currentTab': 0
  },

  swiperTab: function (e) {
    let _this = this;
    _this.setData({
      currentTab: e.detail.current
    });
  },

  clickTab: function (e) {
    let _this = this;
    if (_this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
    Page({

      /**
       * 页面的初始数据
       */
      data: {
        resp: [],

        'currentTab': 0,

      },

      swiperTab: function (e) {
        console.log(e)
        let _this = this;

        _this.setData({
          currentTab: e.detail.current,
        });
      },

      clickTab: function (e) {
        let _this = this;
        if (_this.data.currentTab == e.target.dataset.current) {
          return false;
        } else {
          _this.setData({
            currentTab: e.target.dataset.current,
          })
        }
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
        var _this = this;
        wx.request({
          url: 'http://172.16.12.11:8080/app/console/fq?fnum=0&&lnum=10',
          method: 'POST',
          dataType: 'json', // 小写的json
          success: function (e) {
            console.log(e);
            _this.setData({
              resp: e.data.newslist
            });
            // console.log(e.data.newslist);
            // console.log(_this.data.newlist)
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