// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    gpsInfo: "香港",
    latitude: "22.26",
    longitude: "114.17"
  },
  methods: {
    handleGetLocation: function () {
      const that = this; // 保存当前的 this 引用
      // 发起网络请求
      wx.request({
        url: 'http://localhost:10089/proxy/nginx',
        success(res){
          console.log(res.data)
          const obj = res.data as { [key: string]: any };
          console.log(obj.data.result.city);
          that.setData({
            gpsInfo:obj.data.result.city,
            latitude: obj.data.result.latitude,
            longitude: obj.data.result.longitude
          })
        }
      })
    }
    
    
  },
})
