// 设备判断
// import miHoYoLandscapeTip from 'mihoyo-landscape-tip';

const u = navigator && navigator.userAgent;
let isMobile = false;
if (u) {
  // 是否为android，是否为iPhone
  if (u.includes("Android") || u.includes("iPhone")) {
    isMobile = true;
  }
}

// if (isMobile) {
//   // 仅竖屏可用
//   miHoYoLandscapeTip.init({
//     mode: 'portrait'
//   });
// }

function checkSize() {
  let winWidth;
  let winHeight;
  // 获取窗口宽度
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  } else if (document.body && document.body.clientWidth) {
    winWidth = document.body.clientWidth;
  }
  // 获取窗口高度
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight;
  }
  // 通过深入Document内部对body进行检测，获取窗口大小
  if (
    document.documentElement &&
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth
  ) {
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
  }
  const frameStyle = document.body.style;
  // frameStyle.position = 'absolute';
  // 固定比例
  // if (winWidth / winHeight > 659 / 336) {
  //   frameStyle.height = `${winHeight}px`;
  //   frameStyle.width = `${(winHeight / 336) * 659}px`;
  // } else {
  //   frameStyle.width = `${winWidth}px`;
  //   frameStyle.height = `${(winWidth / 659) * 336}px`;
  // }
  // pc端
  if (!isMobile && winWidth / winHeight > 470 / 667) {
    // winWidth = winHeight * (470 / 667);
  }
  frameStyle.width = `${winWidth}px`;
  frameStyle.height = `${winHeight}px`;

  // frameStyle.left = `${(winWidth - parseFloat(frameStyle.width)) / 2}px`;
  // frameStyle.top = `${(winHeight - parseFloat(frameStyle.height)) / 2}px`;
  // 修改font-size
  let fontSize = ((parseFloat(frameStyle.width) / 375) * 14).toFixed(4);
  fontSize = fontSize > 16 ? 16 : fontSize;
  document.documentElement.style.fontSize = `${fontSize}px`;
  // 适配对font-size额外处理的手机
  const nowFontSize = parseFloat(
    getComputedStyle(document.documentElement, false)["font-size"]
  );
  if (`${nowFontSize}` !== fontSize) {
    document.documentElement.style.fontSize = `${(fontSize * fontSize) /
      nowFontSize}px`;
  }

  // 适配三星S9
  // if(navigator.userAgent.indexOf('SM-G9650') != -1){
  //   $("html").css("font-size",fontSize*10/11+"px");
  // }
}

window.onresize = () => {
  checkSize();
};

checkSize();
