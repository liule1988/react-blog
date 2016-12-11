# 前言
作为前端开发的从业人员，虽然才刚刚工作不到半年，但依然感觉到了不小的压力。一直对比较火热的两款前端MVVM框架——Vue和React很感兴趣，前一阵子在工作之余，啃了接近2个周的Vue官方文档，也写了点简单的Demo，但还是感觉不太爽，看了阮一峰老师的博客，阮老师现在的技术栈是前端React，后端Node，我属于自控能力比较差的一类人，这次买了《React Native入门与实战》一书，打算好好充充电。但是，买回来我发现了一个不好的事情，这本书是2015年11月份出版的，也就是说距离现在已经整整一年了，官方文档已经更新了不知道多少版了，在读到作者序里的一句话我更加有点想哭了，他是这么说的
>因为React Native Android版本还不够稳定，本书所有实例都是基于iOS开发的。

oh...我恨我自己为什么买不起一台Mac，其实iOS和Android只是一些组件和API不同，再Windows下也是可以学习的，嗯，呵呵。
***
### 那么，开始吧。
##### 1 环境搭建。
这一步基本上没啥可说的，照着[React Native中文官网](http://reactnative.cn/)上安装`jdk`，`node`，配置`环境变量`，以及等等。
当创建好第一个工程后，假设叫工程名`MyRNApp`，当在命令行输入下列命令后
`$ react-native run-android`
会启动一个服务，默认的端口是8081，我在经历多次提示`403 forbidden`后，才明白原来是端口被占用了，可以在项目下的`node_modules\react-native\local-cli\server\server.js下的修改方法server的default就是了`
另外一个比较坑爹的地方是编译失败，在工程目录下的`Android/build.gradle`修改` classpath 'com.android.tools.build:gradle:1.3.1'`为`1.2.3`

##### 2 说说JSX和Flex布局
其实这一部分倒也没什么，JSX语法就是在js中插入html语句，看起来很直观，用起来自然也是很爽啦
` var name = 'xiao ming';<a href="xxx">Hello {name}!</a> `
推荐的[JSX入门教程](http://www.tuicool.com/articles/r2IJNr)可以看看,flex布局也是比较容易的，我觉得它实现起来比以往的盒子模型更简单，可以看看[*Flex* 布局教程:实例篇 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)，就在笔者写这篇文章时发现，翻墙真的太有必要了，我家里的环境现在还没搭建好，哭。

##### 3 常用组件及实战

3.1 View组件
View组件就相当于web开发里的`<div>`标签一样，可以用充当容器和进行布局，主要是实战了一把flex布局，实现了一个九宫格的布局。
` class Xinwen extends Component{
  render(){
       return (
  <View style={styles.flex}>
     <View style={styles.container}>
      <View style={[styles.items,styles.center]}>
      <Text style={styles.font}>酒店</Text>
     </View>
     <View style={[styles.items,styles.lineLR]}>
         <View style={[styles.center,styles.flex,styles.lineCernter]}>
            <Text style={styles.font}>海外酒店</Text>
           </View>
        <View style={[styles.center,styles.flex]}>
           <Text style={styles.font}>特惠酒店</Text>
         </View>
      </View>
       <View style={styles.items}>
        <View style={[styles.center,styles.flex,styles.lineCernter]}>
          <Text style={styles.font}>团购</Text>
       </View>
      <View style={[styles.center,styles.flex]}>
         <Text style={styles.font}>客栈.公寓</Text>
      </View>
      </View>
    </View>
</View>   );
 }} `
样式如下：
`
  const styles = StyleSheet.create({
  container: {
  // flex: 1,
  flexDirection:'row',
   marginLeft:5,
   marginRight:5,
   marginTop:25,
   height:84,
  borderRadius:5,
  padding:2,
  backgroundColor:'#aabb87'
 },
  items: {
   flex:1,
   height:80,
 },
  flex:{
    flex:1,
    },
center:{
  justifyContent:'center',
 alignItems:'center',
   },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
 },
 lineLR:{
   borderLeftWidth:1,
 borderRightWidth:1,
    borderColor:'#fff',
 },
lineCernter:{
    borderBottomWidth:1,
   borderColor:'#fff',
 }
`
效果图如下