#**jQuery��������д��**

##**ǰ��**

��Ϊǰ�˿����ߣ�һ��ļ��߼������Ѿ�ϰ���������������ı�̷�����������Ҫ����jQuery�е���������д������ʵԭ����Ҳ�ǲ��ġ�

---

##**��������д��**

������һ�����������Ϊ���ӣ�ͨ������һ��jQuery��ȫ�ֶ�������������

```
(function(jq, g){
 
 function VideoDialog(){
  //ִ�г�ʼ��
  return this.init.apply(this, arguments);
 }
 
 var vPro = VideoDialog.prototype;
 var maskObj = jq.showComMask();
 //����UI��Ӧ��html������css���ڶ�Ӧ��css�ļ���ȥ����
 var tpl = '<div class="u-video-dialog" id="j-videoDialog">\
     <div class="title">\
      <h3>��Ƶ����</h3>\
      <a class="close" id="j-close"></a>\
     </div>\
     <div class="video-box" id="j-videoBox">\
     </div>\
    </div>';
 
 vPro.init = function (data) {
  if(!data){
   return;
  }
  //ͳһ�������
  this.tpl = $(tpl);
  this.videoBoxNode = this.tpl.find('#j-videoBox');
  this.closeBtnNode = this.tpl.find('#j-close');
 
  jq.cloudPlayer({
         parent : $(this.videoBoxNode),
         autoStart : true,
         resolutions:{
             hdfile: data.url
         },
         sdMp4Url:'http://video.study.163.com/edu-video/nos/mp4/2014/11/26/876018_hd.mp4',
     });
 
     var top = ((jq(window).height() - 450)/2 + (jq(document).scrollTop() || 0));
     this.tpl.css({'top':top});
 
  this.bindEvent();
 }
 //������ַ���
 vPro.bindEvent = function() {
  var that = this;
 
  $(this.closeBtnNode).click(function() {
   that.remove();
  })
 };
 
 vPro.remove = function() {
  $(this.tpl).remove();
  maskObj.removeMask();
 };
 
 vPro.show = function() {
  maskObj.show();
  $(document.body).append(this.tpl);
 };
 //���ҵ�ȫ�ֶ���jq��ȥ
 jq.showVideoDialog = function(data) {
  return (new VideoDialog(data)).show();
 };
 

})(jQuery, window);
```
������ļ���ֱ��ͨ��jq.showVideoDialog(data),�Ϳ��Խ��е����ˡ�