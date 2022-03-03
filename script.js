// ==UserScript==
// @name         chinahrt helper
// @include      https://web.chinahrt.com
// @version      1.0
// @description  自动播放教学视频，并设置多倍速，使网页失去焦点时不再自动暂停
// @author       zhanghx0905
// @match        http://videoadmin.chinahrt.com.cn/videoPlay/play*
// @match        http://videoadmin.chinahrt.com/videoPlay/play*
// @match        https://videoadmin.chinahrt.com.cn/videoPlay/play*
// @match        https://videoadmin.chinahrt.com/videoPlay/play*
// ==/UserScript==
var rate = 16;
actualInterval = window.setInterval("addActualTime()", 1000 / rate);
playHandler = function () {
    console.log("playHandler replaced");
    if (typeof (actualInterval) == 'undefined') {
        actualInterval = window.setInterval("addActualTime()", 1000 / rate);
    }
    h5Play();
}
$(document).ready(function () {
    setTimeout(() => {
        setInterval(() => {
            var videoobj = document.getElementsByTagName("video")[0];
            videoobj.playbackRate = rate;
            videoobj.muted = true;
            if (videoobj.paused) {
                videoobj.play();
                console.log('自动播放');
            }
            window.onfocus = function () { console.log('原始事件已被替换') };
            window.onblur = function () { console.log('原始事件已被替换') };

        }, 5000);
    }, 1000);
})